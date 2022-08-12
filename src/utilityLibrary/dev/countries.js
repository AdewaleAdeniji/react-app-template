let countries = [
    {
        abbreviation: "US",
        name: "United States",
        codes: ["+1"]
    },
    {
        abbreviation: "AF",
        name: "Afghanistan",
        codes: ['+93']
    },
    {
        abbreviation: "AX",
        name: "Åland Islands",
        codes: ['+358 18']
    },
    {
        abbreviation: "AL",
        name: "Albania",
        codes: ['+355']
    },
    {
        abbreviation: "DZ",
        name: "Algeria",
        codes: ["+213"]
    },
    {
        abbreviation: "AS",
        name: "American Samoa",
        codes: ["+1 684"]
    },
    {
        abbreviation: "AD",
        name: "Andorra",
        codes: ["+376"]
    },
    {
        abbreviation: "AO",
        name: "Angola",
        codes: ["+244"]
    },
    {
        abbreviation: "AI",
        name: "Anguilla",
        codes: ["+1 264"]
    },
    {
        abbreviation: "AQ",
        name: "Antarctica",
        codes: ["+672"]
    },
    {
        abbreviation: "AG",
        name: "Antigua and Barbuda",
        codes: ["+1 268"]
    },
    {
        abbreviation: "AR",
        name: "Argentina",
        codes: ["+54"]
    },
    {
        abbreviation: "AM",
        name: "Armenia",
        codes: ["+374"]
    },
    {
        abbreviation: "AW",
        name: "Aruba",
        codes: ["+297"]
    },
    {
        abbreviation: "AU",
        name: "Australia",
        codes: ["+61"]
    },
    {
        abbreviation: "AT",
        name: "Austria",
        codes: ["+43"]
    },
    {
        abbreviation: "AZ",
        name: "Azerbaijan",
        codes: ["+994"]
    },
    {
        abbreviation: "BS",
        name: "Bahamas",
        codes: ["+1 242"]
    },
    {
        abbreviation: "BH",
        name: "Bahrain",
        codes: ["+973"]
    },
    {
        abbreviation: "BD",
        name: "Bangladesh",
        codes: ["+880"]
    },
    {
        abbreviation: "BB",
        name: "Barbados",
        codes: ["+1 246"]
    },
    {
        abbreviation: "BY",
        name: "Belarus",
        codes: ["+375"]
    },
    {
        abbreviation: "BE",
        name: "Belgium",
        codes: ["+32"]
    },
    {
        abbreviation: "BZ",
        name: "Belize",
        codes: ["+501"]
    },
    {
        abbreviation: "BJ",
        name: "Benin",
        codes: ["+229"]
    },
    {
        abbreviation: "BM",
        name: "Bermuda",
        codes: ["+1 441"]
    },
    {
        abbreviation: "BT",
        name: "Bhutan",
        codes: ["+975"]
    },
    {
        abbreviation: "BO",
        name: "Bolivia, Plurinational State of",
        codes: ["+591"]
    },
    {
        abbreviation: "BQ",
        name: "Bonaire, Sint Eustatius and Saba",
        codes: ["+599 7"]
    },
    {
        abbreviation: "BA",
        name: "Bosnia and Herzegovina",
        codes: ["+387"]
    },
    {
        abbreviation: "BW",
        name: "Botswana",
        codes: ["+267"]
    },
    {
        abbreviation: "BV",
        name: "Bouvet Island",
        codes: ["+47"]
    },
    {
        abbreviation: "BR",
        name: "Brazil",
        codes: ["+55"]
    },
    {
        abbreviation: "IO",
        name: "British Indian Ocean Territory",
        codes: ["+246"]
    },
    {
        abbreviation: "BN",
        name: "Brunei Darussalam",
        codes: ["+673"]
    },
    {
        abbreviation: "BG",
        name: "Bulgaria",
        codes: ["+359"]
    },
    {
        abbreviation: "BF",
        name: "Burkina Faso",
        codes: ["+226"]
    },
    {
        abbreviation: "BI",
        name: "Burundi",
        codes: ["+257"]
    },
    {
        abbreviation: "KH",
        name: "Cambodia",
        codes: ["+855"]
    },
    {
        abbreviation: "CM",
        name: "Cameroon",
        codes: ["+237"]
    },
    {
        abbreviation: "CA",
        name: "Canada",
        codes: ["+1"]
    },
    {
        abbreviation: "CV",
        name: "Cape Verde",
        codes: ["+238"]
    },
    {
        abbreviation: "KY",
        name: "Cayman Islands",
        codes: ["+1 345"]
    },
    {
        abbreviation: "CF",
        name: "Central African Republic",
        codes: ["+236"]
    },
    {
        abbreviation: "TD",
        name: "Chad",
        codes: ["+235"]
    },
    {
        abbreviation: "CL",
        name: "Chile",
        codes: ["+56"]
    },
    {
        abbreviation: "CN",
        name: "China",
        codes: ["+86"]
    },
    {
        abbreviation: "CX",
        name: "Christmas Island",
        codes: ["+61 89164"]
    },
    {
        abbreviation: "CC",
        name: "Cocos (Keeling) Islands",
        codes: ["+61 89162"]
    },
    {
        abbreviation: "CO",
        name: "Colombia",
        codes: ["+57"]
    },
    {
        abbreviation: "KM",
        name: "Comoros",
        codes: ["+269"]
    },
    {
        abbreviation: "CG",
        name: "Congo",
        codes: ["+242"]
    },
    {
        abbreviation: "CD",
        name: "Congo, the Democratic Republic of the (Zaire)",
        codes: ["+243"]
    },
    {
        abbreviation: "CK",
        name: "Cook Islands",
        codes: ["+682"]
    },
    {
        abbreviation: "CR",
        name: "Costa Rica",
        codes: ["+506"]
    },
    {
        abbreviation: "CI",
        name: "Côte d'Ivoire",
        codes: ["+225"]
    },
    {
        abbreviation: "HR",
        name: "Croatia",
        codes: ["+385"]
    },
    {
        abbreviation: "CU",
        name: "Cuba",
        codes: ["+53"]
    },
    {
        abbreviation: "CW",
        name: "Curaçao",
        codes: ["+599 9"]
    },
    {
        abbreviation: "CY",
        name: "Cyprus",
        codes: ["+357"]
    },
    {
        abbreviation: "CZ",
        name: "Czech Republic",
        codes: ["+420"]
    },
    {
        abbreviation: "DK",
        name: "Denmark",
        codes: ["+45"]
    },
    {
        abbreviation: "DJ",
        name: "Djibouti",
        codes: ["+253"]
    },
    {
        abbreviation: "DM",
        name: "Dominica",
        codes: ["+1 767"]
    },
    {
        abbreviation: "DO",
        name: "Dominican Republic",
        codes: ["+1 809", "+1 829", "+1 849"]
    },
    {
        abbreviation: "EC",
        name: "Ecuador",
        codes: ["+593"]
    },
    {
        abbreviation: "EG",
        name: "Egypt",
        codes: ["+20"]
    },
    {
        abbreviation: "SV",
        name: "El Salvador",
        codes: ["+503"]
    },
    {
        abbreviation: "GQ",
        name: "Equatorial Guinea",
        codes: ["+240"]
    },
    {
        abbreviation: "ER",
        name: "Eritrea",
        codes: ["+291"]
    },
    {
        abbreviation: "EE",
        name: "Estonia",
        codes: ["+372"]
    },
    {
        abbreviation: "ET",
        name: "Ethiopia",
        codes: ["+251"]
    },
    {
        abbreviation: "FK",
        name: "Falkland Islands (Malvinas)",
        codes: ["+500"]
    },
    {
        abbreviation: "FO",
        name: "Faroe Islands",
        codes: ["+298"]
    },
    {
        abbreviation: "FJ",
        name: "Fiji",
        codes: ["+679"]
    },
    {
        abbreviation: "FI",
        name: "Finland",
        codes: ["+358"]
    },
    {
        abbreviation: "FR",
        name: "France",
        codes: ["+33"]
    },
    {
        abbreviation: "GF",
        name: "French Guiana",
        codes: ["+594"]
    },
    {
        abbreviation: "PF",
        name: "French Polynesia",
        codes: ["+689"]
    },
    {
        abbreviation: "TF",
        name: "French Southern Territories",
        codes: ["+262"]
    },
    {
        abbreviation: "GA",
        name: "Gabon",
        codes: ["+241"]
    },
    {
        abbreviation: "GM",
        name: "Gambia",
        codes: ["+220"]
    },
    {
        abbreviation: "GE",
        name: "Georgia",
        codes: ["+995"]
    },
    {
        abbreviation: "DE",
        name: "Germany",
        codes: ["+49"]
    },
    {
        abbreviation: "GH",
        name: "Ghana",
        codes: ["+233"]
    },
    {
        abbreviation: "GI",
        name: "Gibraltar",
        codes: ["+350"]
    },
    {
        abbreviation: "GR",
        name: "Greece",
        codes: ["+30"]
    },
    {
        abbreviation: "GL",
        name: "Greenland",
        codes: ["+299"]
    },
    {
        abbreviation: "GD",
        name: "Grenada",
        codes: ["+1 473"]
    },
    {
        abbreviation: "GP",
        name: "Guadeloupe",
        codes: ["+590"]
    },
    {
        abbreviation: "GU",
        name: "Guam",
        codes: ["+1 671"]
    },
    {
        abbreviation: "GT",
        name: "Guatemala",
        codes: ["+502"]
    },
    {
        abbreviation: "GG",
        name: "Guernsey",
        codes: ["+44 1481", "+44 7781", "+44 7839", "+44 7911"]
    },
    {
        abbreviation: "GN",
        name: "Guinea",
        codes: ["+224"]
    },
    {
        abbreviation: "GW",
        name: "Guinea-Bissau",
        codes: ["+245"]
    },
    {
        abbreviation: "GY",
        name: "Guyana",
        codes: ["+592"]
    },
    {
        abbreviation: "HT",
        name: "Haiti",
        codes: ["+509"]
    },
    {
        abbreviation: "HM",
        name: "Heard Island and McDonald Islands",
        codes: [""]
    },
    {
        abbreviation: "VA",
        name: "Holy See (Vatican City State)",
        codes: [""]
    },
    {
        abbreviation: "HN",
        name: "Honduras",
        codes: ["+504"]
    },
    {
        abbreviation: "HK",
        name: "Hong Kong",
        codes: ["+852"]
    },
    {
        abbreviation: "HU",
        name: "Hungary",
        codes: ["+36"]
    },
    {
        abbreviation: "IS",
        name: "Iceland",
        codes: ["+354"]
    },
    {
        abbreviation: "IN",
        name: "India",
        codes: ["+91"]
    },
    {
        abbreviation: "ID",
        name: "Indonesia",
        codes: ["+62"]
    },
    {
        abbreviation: "IR",
        name: "Iran, Islamic Republic of",
        codes: ["+98"]
    },
    {
        abbreviation: "IQ",
        name: "Iraq",
        codes: ["+964"]
    },
    {
        abbreviation: "IE",
        name: "Ireland",
        codes: ["+353"]
    },
    {
        abbreviation: "IM",
        name: "Isle of Man",
        codes: ["+441624", "+447524", "+447624", "+447924"]
    },
    {
        abbreviation: "IL",
        name: "Israel",
        codes: ["+972"]
    },
    {
        abbreviation: "IT",
        name: "Italy",
        codes: ["+39"]
    },
    {
        abbreviation: "JM",
        name: "Jamaica",
        codes: ["+1876"]
    },
    {
        abbreviation: "JP",
        name: "Japan",
        codes: ["+81"]
    },
    {
        abbreviation: "JE",
        name: "Jersey",
        codes: ["+441534"]
    },
    {
        abbreviation: "JO",
        name: "Jordan",
        codes: ["+962"]
    },
    {
        abbreviation: "KZ",
        name: "Kazakhstan",
        codes: ["+76", "+77"]
    },
    {
        abbreviation: "KE",
        name: "Kenya",
        codes: ["+254"]
    },
    {
        abbreviation: "KI",
        name: "Kiribati",
        codes: ["+686"]
    },
    {
        abbreviation: "KP",
        name: "Korea, Democratic People's Republic of",
        codes: ["+850"]
    },
    {
        abbreviation: "KR",
        name: "Korea, Republic of",
        codes: ["+82"]
    },
    {
        abbreviation: "KW",
        name: "Kuwait",
        codes: ["+965"]
    },
    {
        abbreviation: "KG",
        name: "Kyrgyzstan",
        codes: ["+996"]
    },
    {
        abbreviation: "LA",
        name: "Lao People's Democratic Republic",
        codes: ["+856"]
    },
    {
        abbreviation: "LV",
        name: "Latvia",
        codes: ["+371"]
    },
    {
        abbreviation: "LB",
        name: "Lebanon",
        codes: ["+961"]
    },
    {
        abbreviation: "LS",
        name: "Lesotho",
        codes: ["+266"]
    },
    {
        abbreviation: "LR",
        name: "Liberia",
        codes: ["+231"]
    },
    {
        abbreviation: "LY",
        name: "Libya",
        codes: ["+218"]
    },
    {
        abbreviation: "LI",
        name: "Liechtenstein",
        codes: ["+423"]
    },
    {
        abbreviation: "LT",
        name: "Lithuania",
        codes: ["+370"]
    },
    {
        abbreviation: "LU",
        name: "Luxembourg",
        codes: ["+352"]
    },
    {
        abbreviation: "MO",
        name: "Macao",
        codes: ["+853"]
    },
    {
        abbreviation: "MK",
        name: "Macedonia, the former Yugoslav Republic of",
        codes: []
    },
    {
        abbreviation: "MG",
        name: "Madagascar",
        codes: ["+261"]
    },
    {
        abbreviation: "MW",
        name: "Malawi",
        codes: ["+265"]
    },
    {
        abbreviation: "MY",
        name: "Malaysia",
        codes: ["+60"]
    },
    {
        abbreviation: "MV",
        name: "Maldives",
        codes: ["+960"]
    },
    {
        abbreviation: "ML",
        name: "Mali",
        codes: ["+223"]
    },
    {
        abbreviation: "MT",
        name: "Malta",
        codes: ["+356"]
    },
    {
        abbreviation: "MH",
        name: "Marshall Islands",
        codes: ["+692"]
    },
    {
        abbreviation: "MQ",
        name: "Martinique",
        codes: ["+596"]
    },
    {
        abbreviation: "MR",
        name: "Mauritania",
        codes: ["+222"]
    },
    {
        abbreviation: "MU",
        name: "Mauritius",
        codes: ["+230"]
    },
    {
        abbreviation: "YT",
        name: "Mayotte",
        codes: ["+262269", "+262639"]
    },
    {
        abbreviation: "MX",
        name: "Mexico",
        codes: ["+52"]
    },
    {
        abbreviation: "FM",
        name: "Micronesia, Federated States of",
        codes: ["+691"]
    },
    {
        abbreviation: "MD",
        name: "Moldova, Republic of",
        codes: ["+373"]
    },
    {
        abbreviation: "MC",
        name: "Monaco",
        codes: ["+377"]
    },
    {
        abbreviation: "MN",
        name: "Mongolia",
        codes: ["+976"]
    },
    {
        abbreviation: "ME",
        name: "Montenegro",
        codes: ["+382"]
    },
    {
        abbreviation: "MS",
        name: "Montserrat",
        codes: ["+1664"]
    },
    {
        abbreviation: "MA",
        name: "Morocco",
        codes: ["+212"]
    },
    {
        abbreviation: "MZ",
        name: "Mozambique",
        codes: ["+258"]
    },
    {
        abbreviation: "MM",
        name: "Myanmar",
        codes: ["+95"]
    },
    {
        abbreviation: "NA",
        name: "Namibia",
        codes: ["+264"]
    },
    {
        abbreviation: "NR",
        name: "Nauru",
        codes: ["+674"]
    },
    {
        abbreviation: "NP",
        name: "Nepal",
        codes: ["+977"]
    },
    {
        abbreviation: "NL",
        name: "Netherlands",
        codes: ["+31"]
    },
    {
        abbreviation: "NC",
        name: "New Caledonia",
        codes: ["+687"]
    },
    {
        abbreviation: "NZ",
        name: "New Zealand",
        codes: ["+64"]
    },
    {
        abbreviation: "NI",
        name: "Nicaragua",
        codes: ["+505"]
    },
    {
        abbreviation: "NE",
        name: "Niger",
        codes: ["+227"]
    },
    {
        abbreviation: "NG",
        name: "Nigeria",
        codes: ["+234"]
    },
    {
        abbreviation: "NU",
        name: "Niue",
        codes: ["+683"]
    },
    {
        abbreviation: "NF",
        name: "Norfolk Island",
        codes: ["+6723"]
    },
    {
        abbreviation: "MP",
        name: "Northern Mariana Islands",
        codes: ["+1670"]
    },
    {
        abbreviation: "NO",
        name: "Norway",
        codes: ["+47"]
    },
    {
        abbreviation: "OM",
        name: "Oman",
        codes: ["+968"]
    },
    {
        abbreviation: "PK",
        name: "Pakistan",
        codes: ["+92"]
    },
    {
        abbreviation: "PW",
        name: "Palau",
        codes: ["+680"]
    },
    {
        abbreviation: "PS",
        name: "Palestinian Territory, Occupied",
        codes: ["+970"]
    },
    {
        abbreviation: "PA",
        name: "Panama",
        codes: ["+507"]
    },
    {
        abbreviation: "PG",
        name: "Papua New Guinea",
        codes: ["+675"]
    },
    {
        abbreviation: "PY",
        name: "Paraguay",
        codes: ["+595"]
    },
    {
        abbreviation: "PE",
        name: "Peru",
        codes: ["+51"]
    },
    {
        abbreviation: "PH",
        name: "Philippines",
        codes: ["+63"]
    },
    {
        abbreviation: "PN",
        name: "Pitcairn",
        codes: ["+64"]
    },
    {
        abbreviation: "PL",
        name: "Poland",
        codes: ["+48"]
    },
    {
        abbreviation: "PT",
        name: "Portugal",
        codes: ["+351"]
    },
    {
        abbreviation: "PR",
        name: "Puerto Rico",
        codes: ["+1787", "+1939"]
    },
    {
        abbreviation: "QA",
        name: "Qatar",
        codes: ["+974"]
    },
    {
        abbreviation: "RE",
        name: "Réunion",
        codes: ["+262"]
    },
    {
        abbreviation: "RO",
        name: "Romania",
        codes: ["+40"]
    },
    {
        abbreviation: "RU",
        name: "Russian Federation",
        codes: ["+7"]
    },
    {
        abbreviation: "RW",
        name: "Rwanda",
        codes: ["+250"]
    },
    {
        abbreviation: "BL",
        name: "Saint Barthélemy",
        codes: ["+590"]
    },
    {
        abbreviation: "SH",
        name: "Saint Helena, Ascension and Tristan da Cunha",
        codes: ["+290"]
    },
    {
        abbreviation: "KN",
        name: "Saint Kitts and Nevis",
        codes: ["+1869"]
    },
    {
        abbreviation: "LC",
        name: "Saint Lucia",
        codes: ["+1758"]
    },
    {
        abbreviation: "MF",
        name: "Saint Martin (French part)",
        codes: ["+590"]
    },
    {
        abbreviation: "PM",
        name: "Saint Pierre and Miquelon",
        codes: ["+508"]
    },
    {
        abbreviation: "VC",
        name: "Saint Vincent and the Grenadines",
        codes: ["+1784"]
    },
    {
        abbreviation: "WS",
        name: "Samoa",
        codes: ["+685"]
    },
    {
        abbreviation: "SM",
        name: "San Marino",
        codes: ["+378"]
    },
    {
        abbreviation: "ST",
        name: "Sao Tome and Principe",
        codes: ["+239"]
    },
    {
        abbreviation: "SA",
        name: "Saudi Arabia",
        codes: ["+966"]
    },
    {
        abbreviation: "SN",
        name: "Senegal",
        codes: ["+221"]
    },
    {
        abbreviation: "RS",
        name: "Serbia",
        codes: ["+381"]
    },
    {
        abbreviation: "SC",
        name: "Seychelles",
        codes: ["+248"]
    },
    {
        abbreviation: "SL",
        name: "Sierra Leone",
        codes: ["+232"]
    },
    {
        abbreviation: "SG",
        name: "Singapore",
        codes: ["+65"]
    },
    {
        abbreviation: "SX",
        name: "Sint Maarten (Dutch part)",
        codes: ["+1721"]
    },
    {
        abbreviation: "SK",
        name: "Slovakia",
        codes: ["+421"]
    },
    {
        abbreviation: "SI",
        name: "Slovenia",
        codes: ["+386"]
    },
    {
        abbreviation: "SB",
        name: "Solomon Islands",
        codes: ["+677"]
    },
    {
        abbreviation: "SO",
        name: "Somalia",
        codes: ["+252"]
    },
    {
        abbreviation: "ZA",
        name: "South Africa",
        codes: ["+27"]
    },
    {
        abbreviation: "GS",
        name: "South Georgia and the South Sandwich Islands",
        codes: ["+500"]
    },
    {
        abbreviation: "SS",
        name: "South Sudan",
        codes: ["+211"]
    },
    {
        abbreviation: "ES",
        name: "Spain",
        codes: ["+34"]
    },
    {
        abbreviation: "LK",
        name: "Sri Lanka",
        codes: ["+94"]
    },
    {
        abbreviation: "SD",
        name: "Sudan",
        codes: ["+249"]
    },
    {
        abbreviation: "SR",
        name: "Suriname",
        codes: ["+597"]
    },
    {
        abbreviation: "SJ",
        name: "Svalbard and Jan Mayen",
        codes: ["+4779"]
    },
    {
        abbreviation: "SZ",
        name: "Swaziland",
        codes: ["+268"]
    },
    {
        abbreviation: "SE",
        name: "Sweden",
        codes: ["+46"]
    },
    {
        abbreviation: "CH",
        name: "Switzerland",
        codes: ["+41"]
    },
    {
        abbreviation: "SY",
        name: "Syrian Arab Republic",
        codes: ["+963"]
    },
    {
        abbreviation: "TW",
        name: "Taiwan, Province of China",
        codes: ["+886"]
    },
    {
        abbreviation: "TJ",
        name: "Tajikistan",
        codes: ["+992"]
    },
    {
        abbreviation: "TZ",
        name: "Tanzania, United Republic of",
        codes: ["+255"]
    },
    {
        abbreviation: "TH",
        name: "Thailand",
        codes: ["+66"]
    },
    {
        abbreviation: "TL",
        name: "Timor-Leste",
        codes: ["+670"]
    },
    {
        abbreviation: "TG",
        name: "Togo",
        codes: ["+228"]
    },
    {
        abbreviation: "TK",
        name: "Tokelau",
        codes: ["+690"]
    },
    {
        abbreviation: "TO",
        name: "Tonga",
        codes: ["+676"]
    },
    {
        abbreviation: "TT",
        name: "Trinidad and Tobago",
        codes: ["+1868"]
    },
    {
        abbreviation: "TN",
        name: "Tunisia",
        codes: ["+216"]
    },
    {
        abbreviation: "TR",
        name: "Turkey",
        codes: ["+90"]
    },
    {
        abbreviation: "TM",
        name: "Turkmenistan",
        codes: ["+993"]
    },
    {
        abbreviation: "TC",
        name: "Turks and Caicos Islands",
        codes: ["+1649"]
    },
    {
        abbreviation: "TV",
        name: "Tuvalu",
        codes: ["+688"]
    },
    {
        abbreviation: "UG",
        name: "Uganda",
        codes: ["+256"]
    },
    {
        abbreviation: "UA",
        name: "Ukraine",
        codes: ["+380"]
    },
    {
        abbreviation: "AE",
        name: "United Arab Emirates",
        codes: ["+971"]
    },
    {
        abbreviation: "GB",
        name: "United Kingdom",
        codes: ["+44"]
    },
    {
        abbreviation: "UM",
        name: "United States Minor Outlying Islands",
        codes: ["+246"]
    },
    {
        abbreviation: "UY",
        name: "Uruguay",
        codes: ["+598"]
    },
    {
        abbreviation: "UZ",
        name: "Uzbekistan",
        codes: ["+998"]
    },
    {
        abbreviation: "VU",
        name: "Vanuatu",
        codes: ["+678"]
    },
    {
        abbreviation: "VE",
        name: "Venezuela, Bolivarian Republic of",
        codes: ["+58"]
    },
    {
        abbreviation: "VN",
        name: "Vietnam",
        codes: ["+84"]
    },
    {
        abbreviation: "VG",
        name: "Virgin Islands, British",
        codes: ["+1284"]
    },
    {
        abbreviation: "VI",
        name: "Virgin Islands, U.S.",
        codes: ["+1"]
    },
    {
        abbreviation: "WF",
        name: "Wallis and Futuna",
        codes: ["+681"]
    },
    {
        abbreviation: "EH",
        name: "Western Sahara",
        codes: ["+212"]
    },
    {
        abbreviation: "YE",
        name: "Yemen",
        codes: ["+967"]
    },
    {
        abbreviation: "ZM",
        name: "Zambia",
        codes: ["+260"]
    },
    {
        abbreviation: "ZW",
        name: "Zimbabwe",
        codes: ["+263"]
    }
];

export default countries;