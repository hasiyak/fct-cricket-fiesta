```
fct_cricket_fiesta/
│
├── index.html              # සාමාන්‍ය අයට Live Score එක පේන ප්‍රධාන පිටුව
├── fixtures.html           # මැච් කාලසටහන
├── points-table.html       # Points Table එක
├── teams.html              # කණ්ඩායම් සහ ක්‍රීඩකයන් ඇතුලත් කරන පිටුව
│
│── admin/
│   ├── login.html          # Admin ලොග් වෙන Supabase Auth පිටුව
│   ├── admin-index.html    # ලකුණු ඇතුලත් කරන Scoring Dashboard එක
│   
│
├── components/             
│   ├── header.html         # හැම පිටුවකටම පොදු Header එක (JS හරහා load කරයි)
│   └── footer.html         # හැම පිටුවකටම පොදු Footer එක (JS හරහා load කරයි)
│
├── assets/
│   ├── css/
│   │   └── custom.css      # Custom animations සහ styles
│   └── img/
│       └── fct-logo.png    # ලෝගෝ සහ පින්තූර
│
└── js/
    ├── supabase-init.js    # Supabase URL සහ API Key එක 
    ├── auth.js             # Admin ලොග් වීමේ සහ ලොග් අවුට් වීමේ functions
    ├── live-viewer.js      # Supabase Realtime හරහා සාමාන්‍ය අයට live ලකුණු ගෙනෙන කේතය
    ├── admin-scorer.js     # Admin panel එකෙන් ලකුණු DB එකට යවන (Insert/Update) කේතය
    └── main.js             # Header/Footer fetch() මගින් load කරන පොදු කේතය

```