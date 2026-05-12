from bs4 import BeautifulSoup
import re

with open('index.old.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

# In elementor, there are tabs/toggles or just sections for each state.
# Let's find all instances that look like a unit.
# A unit usually has an "Agendar" link.
agendar_links = soup.find_all('a', text=re.compile(r'Agendar', re.IGNORECASE))
if not agendar_links:
    agendar_links = soup.find_all('a', string=re.compile(r'Agendar', re.IGNORECASE))
if not agendar_links:
    # maybe inside span
    spans = soup.find_all('span', text=re.compile(r'Agendar', re.IGNORECASE))
    agendar_links = [s.parent for s in spans if s.parent.name == 'a']

# Let's try to extract any text block that looks like a phone and address.
# Specifically, the user wants me to compare the units.
# A more robust way: find all elementor widgets that contain a heading "Meus Cílios"
headings = soup.find_all(['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'], text=re.compile(r'Meus Cílios .+', re.IGNORECASE))

units = []

for h in headings:
    text = h.get_text(strip=True)
    if 'Franquia' in text or 'Studio' in text or 'Agende' in text or 'Escolha' in text: continue
    
    # Check parent or siblings for phone and address
    parent = h.find_parent('div', class_='elementor-widget-container')
    if not parent:
        parent = h.find_parent('div', class_='elementor-column')
    
    if parent:
        full_text = parent.get_text(separator=' | ', strip=True)
        # It usually contains (XX) XXXX-XXXX and Rua...
        phone_match = re.search(r'\(\d{2}\)\s*\d{4,5}-\d{4}', full_text)
        if phone_match:
            phone = phone_match.group()
            # Everything after phone is address usually
            addr_part = full_text.split(phone)[-1]
            # Clean up
            addr_part = re.sub(r'\|\s*Agendar.*$', '', addr_part, flags=re.IGNORECASE).strip(' |')
            
            # State determination
            state = 'PR'
            if ' RS' in addr_part or 'Rio Grande do Sul' in addr_part or ', RS' in addr_part: state = 'RS'
            elif ' SC' in addr_part or 'Santa Catarina' in addr_part or ', SC' in addr_part: state = 'SC'
            elif ' SP' in addr_part or 'São Paulo' in addr_part or ', SP' in addr_part: state = 'SP'
            elif ' PR' in addr_part or 'Paraná' in addr_part or ', PR' in addr_part: state = 'PR'
            else:
                # If we can't find it, guess PR
                state = 'PR'
            
            units.append({
                'name': text,
                'phone': phone,
                'address': addr_part,
                'state': state
            })

# Remove duplicates
seen = set()
unique_units = []
for u in units:
    key = u['name'] + u['phone']
    if key not in seen:
        seen.add(key)
        unique_units.append(u)

# Let's print them
for u in unique_units:
    print(f"STATE: {u['state']} | NAME: {u['name']} | PHONE: {u['phone']} | ADDR: {u['address']}")
