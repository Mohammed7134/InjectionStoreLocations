
// Sample data: Array of objects
const data = [
    {
        "ITEM_SER": 5076,
        "ITEM_ID": "6505-99-02-00681",
        "DRUG_NAME": "ABELCET (Amphotericin Lipid Formulation) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 163,
        "ITEM_ID": "6505-99-02-14361",
        "DRUG_NAME": "ACYclovir 250mg (Zovirax) IV Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 5 Shelf C"
    },
    {
        "ITEM_SER": 5231,
        "ITEM_ID": "6505-99-02-00202",
        "DRUG_NAME": "ALTeplase 50mg (Actilyse) IV Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 19 Shelf A"
    },
    {
        "ITEM_SER": 822,
        "ITEM_ID": "6505-99-02-00552",
        "DRUG_NAME": "AMBISOME 50mg (Amphotericin B Liposomal) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 5 Shelf B"
    },
    {
        "ITEM_SER": 2231,
        "ITEM_ID": "6505-99-02-01286",
        "DRUG_NAME": "ARGInine HCl 21% (4.2g/20ml) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 24 Shelf B"
    },
    {
        "ITEM_SER": 6045,
        "ITEM_ID": "6505-99-02-01284",
        "DRUG_NAME": "ARGInine HCl 50% (5g/10ml) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 24 Shelf C"
    },
    {
        "ITEM_SER": 6295,
        "ITEM_ID": "6505-99-02-85201",
        "DRUG_NAME": "ARIPIprazole 400mg (Abilify) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf A"
    },
    {
        "ITEM_SER": 5748,
        "ITEM_ID": "6505-99-02-20112",
        "DRUG_NAME": "ATROPine Sulphate 0.1mg/ml-10ml Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Column 34 Shelf B"
    },
    {
        "ITEM_SER": 167,
        "ITEM_ID": "6505-99-02-20344",
        "DRUG_NAME": "ATROPine Sulphate 1mg/ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 34 Shelf A"
    },
    {
        "ITEM_SER": 5243,
        "ITEM_ID": "6505-99-02-01741",
        "DRUG_NAME": "Abatacept 125mg (Orencia) SC Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5095,
        "ITEM_ID": "6505-99-02-01731",
        "DRUG_NAME": "Abatacept 250mg (Orencia) vial",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 1 Shelf B"
    },
    {
        "ITEM_SER": 2225,
        "ITEM_ID": "6505-99-02-00400",
        "DRUG_NAME": "Absolute Alcohol 100% Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 24 Shelf B"
    },
    {
        "ITEM_SER": 392,
        "ITEM_ID": "6505-99-02-03912",
        "DRUG_NAME": "Acetazolamide 500mg (DiaMOX) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 1 Shelf B"
    },
    {
        "ITEM_SER": 78,
        "ITEM_ID": "6505-99-02-08841",
        "DRUG_NAME": "AcetylCYSTEINE 2g/10ml (Parvolex) IV Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 24 Shelf B"
    },
    {
        "ITEM_SER": 5365,
        "ITEM_ID": "6505-99-02-08062",
        "DRUG_NAME": "Acetylcholine 20mg/2ml (Miochol) injection",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 1 Shelf B"
    },
    {
        "ITEM_SER": 5136,
        "ITEM_ID": "6505-99-02-00261",
        "DRUG_NAME": "Actrapid Cartridges 300iu/3ml",
        "ITEM_PHYSICAL_LOCATION": "Fridge 3 Shelf 1"
    },
    {
        "ITEM_SER": 2084,
        "ITEM_ID": "6505-99-02-06542",
        "DRUG_NAME": "Adalimumb 40mg /0.4ML(Humira) Prefilled Syring ????? ?????",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 1 Shelf C"
    },
    {
        "ITEM_SER": 5649,
        "ITEM_ID": "6505-99-02-06543",
        "DRUG_NAME": "Adalimumb 40mg/0.4ML (Humira) Pen.???",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 1 Shelf D"
    },
    {
        "ITEM_SER": 6555,
        "ITEM_ID": "6505-99-02-06544",
        "DRUG_NAME": "Adalimumb 40mg/0.8ML (AMGEVITA) PEN",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 1 Shelf B"
    },
    {
        "ITEM_SER": 17614,
        "ITEM_ID": "6505-99-02-06547",
        "DRUG_NAME": "Adalimumb 40mg/0.8ML (Hyrimoz) Pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 2 Shelf B"
    },
    {
        "ITEM_SER": 5755,
        "ITEM_ID": "6505-99-02-00081",
        "DRUG_NAME": "AdenOSINE 30mg/10ml (Adenoscan) Vial",
        "ITEM_PHYSICAL_LOCATION": "Column 20 Shelf A"
    },
    {
        "ITEM_SER": 348,
        "ITEM_ID": "6505-99-02-00241",
        "DRUG_NAME": "AdenOSINE 6mg/2ml (Adenocor) ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 20 Shelf A"
    },
    {
        "ITEM_SER": 5445,
        "ITEM_ID": "6505-99-02-67041",
        "DRUG_NAME": "Aflibercept 2mg (Eylea) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 17683,
        "ITEM_ID": "6505-99-02-15481",
        "DRUG_NAME": "Aglucosidase Alfa 50mg (Myozyme) Vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5235,
        "ITEM_ID": "6505-99-35-00712",
        "DRUG_NAME": "Alfacalcidol 1mcg/0.5ml (One Alpha) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 1"
    },
    {
        "ITEM_SER": 2130,
        "ITEM_ID": "6505-99-35-00702",
        "DRUG_NAME": "Alfacalcidol 2mcg/ml (One Alpha) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 3"
    },
    {
        "ITEM_SER": 5603,
        "ITEM_ID": "6505-99-02-14661",
        "DRUG_NAME": "Alirocumab 150mg/ml (Praluent) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 8 Shelf C"
    },
    {
        "ITEM_SER": 5602,
        "ITEM_ID": "6505-99-02-14651",
        "DRUG_NAME": "Alirocumab 75mg/ml (Praluent) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 8 Shelf B"
    },
    {
        "ITEM_SER": 101,
        "ITEM_ID": "6505-99-02-10123",
        "DRUG_NAME": "Alprostadil (Prostin V.R) IV Infusion",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 1"
    },
    {
        "ITEM_SER": 351,
        "ITEM_ID": "6505-99-02-00649",
        "DRUG_NAME": "Amikacin 100mg Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 5 Shelf B"
    },
    {
        "ITEM_SER": 352,
        "ITEM_ID": "6505-99-02-00672",
        "DRUG_NAME": "Amikacin 500mg Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 5 Shelf A"
    },
    {
        "ITEM_SER": 357,
        "ITEM_ID": "6505-99-02-00802",
        "DRUG_NAME": "Amino Acid 10% 250ml Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 54 Shelf B"
    },
    {
        "ITEM_SER": 355,
        "ITEM_ID": "6505-99-02-00732",
        "DRUG_NAME": "Amino Acid 10% 500ml Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 54 Shelf A"
    },
    {
        "ITEM_SER": 354,
        "ITEM_ID": "6505-99-02-00721",
        "DRUG_NAME": "Amino Acid N-Hepa 8% (Aminosteril) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 2226,
        "ITEM_ID": "6505-99-02-00793",
        "DRUG_NAME": "Amino Acid Pediatric 100ml Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 54 Shelf C"
    },
    {
        "ITEM_SER": 353,
        "ITEM_ID": "6505-99-02-00706",
        "DRUG_NAME": "Aminocaproic Acid 5g/100ml Vial",
        "ITEM_PHYSICAL_LOCATION": "Column 24 Shelf C"
    },
    {
        "ITEM_SER": 166,
        "ITEM_ID": "6505-99-02-20143",
        "DRUG_NAME": "Aminophyllin 250mg/10ml vial",
        "ITEM_PHYSICAL_LOCATION": "Column 46 Shelf B"
    },
    {
        "ITEM_SER": 383,
        "ITEM_ID": "6505-99-02-02961",
        "DRUG_NAME": "AmioDARONE 150mg/3ml (cordaron)  Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 19 Shelf B"
    },
    {
        "ITEM_SER": 5457,
        "ITEM_ID": "6505-99-02-06841",
        "DRUG_NAME": "Ammonul 10%/10% Injection",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf A"
    },
    {
        "ITEM_SER": 359,
        "ITEM_ID": "6505-99-02-01002",
        "DRUG_NAME": "Ampicillin 1g injection",
        "ITEM_PHYSICAL_LOCATION": "Column 4 Shelf A"
    },
    {
        "ITEM_SER": 80,
        "ITEM_ID": "6505-99-02-08892",
        "DRUG_NAME": "Ampicillin 250mg Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 5 Shelf A"
    },
    {
        "ITEM_SER": 81,
        "ITEM_ID": "6505-99-02-08922",
        "DRUG_NAME": "Ampicillin 500mg Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 5 Shelf B"
    },
    {
        "ITEM_SER": 5846,
        "ITEM_ID": "6505-99-02-06693",
        "DRUG_NAME": "Anakinra 100mg (Kineret) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5168,
        "ITEM_ID": "6505-99-02-01241",
        "DRUG_NAME": "Anidulafungin 100mg (Eraxis-Ecalta) Infusion",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 1"
    },
    {
        "ITEM_SER": 17621,
        "ITEM_ID": "6505-02-02-00751",
        "DRUG_NAME": "Anifrolumab 300mg/2ml (Saphnelo) Vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 361,
        "ITEM_ID": "6505-99-02-01181",
        "DRUG_NAME": "Anti-D Immunoglobulin 300mcg Syring",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 3"
    },
    {
        "ITEM_SER": 4,
        "ITEM_ID": "6505-99-02-04824",
        "DRUG_NAME": "Anti-Hemophilic Factor 1000U Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 3 Shelf 3"
    },
    {
        "ITEM_SER": 466,
        "ITEM_ID": "6505-99-06-00252",
        "DRUG_NAME": "Anti-Snake SERUM 10ml",
        "ITEM_PHYSICAL_LOCATION": "Fridge 1 Shelf 1"
    },
    {
        "ITEM_SER": 3,
        "ITEM_ID": "6505-99-02-04812",
        "DRUG_NAME": "AntiHemophilic Factor 250U Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 3 Shelf 3"
    },
    {
        "ITEM_SER": 20,
        "ITEM_ID": "6505-99-02-05971",
        "DRUG_NAME": "AntiHemophilic Factor 500U Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 3 Shelf 1"
    },
    {
        "ITEM_SER": 2227,
        "ITEM_ID": "6505-99-06-00231",
        "DRUG_NAME": "Antiscorpion Serum",
        "ITEM_PHYSICAL_LOCATION": "Fridge 1 Shelf 1"
    },
    {
        "ITEM_SER": 6381,
        "ITEM_ID": "6505-99-02-04711",
        "DRUG_NAME": "Apomorphine hydrochloride 10mg/ml (Apo-go) Pen",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6062,
        "ITEM_ID": "6505-99-02-56541",
        "DRUG_NAME": "Artesunate 60mg IM/IV Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5423,
        "ITEM_ID": "6505-99-02-10011",
        "DRUG_NAME": "Atosiban 7.5mg/ml 0.9ml (Tractocile) IV Infusion",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 1"
    },
    {
        "ITEM_SER": 5424,
        "ITEM_ID": "6505-99-02-10021",
        "DRUG_NAME": "Atosiban 7.5mg/ml 5ml (Tractocile) IV Infusion",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 1"
    },
    {
        "ITEM_SER": 2005,
        "ITEM_ID": "6505-99-02-00233",
        "DRUG_NAME": "Augmentin 1.2g Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 4 Shelf B"
    },
    {
        "ITEM_SER": 6353,
        "ITEM_ID": "6505-99-02-00411",
        "DRUG_NAME": "Aztreonam 2gm (Azactam) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 5 Shelf C"
    },
    {
        "ITEM_SER": 172,
        "ITEM_ID": "6505-99-02-21242",
        "DRUG_NAME": "BENZATHINE PenicilIin 1,200,000 IU Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 4 Shelf B"
    },
    {
        "ITEM_SER": 5232,
        "ITEM_ID": "6505-99-02-25111",
        "DRUG_NAME": "BIVALirudin 250mg (Angiomax) IV Only Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 18 Shelf A"
    },
    {
        "ITEM_SER": 52,
        "ITEM_ID": "6505-99-02-07781",
        "DRUG_NAME": "BUPIvacain HCl 0.5% Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 34 Shelf C"
    },
    {
        "ITEM_SER": 53,
        "ITEM_ID": "6505-99-02-07703",
        "DRUG_NAME": "BUPIvacain HCl Heavy 20mg/4ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 34 Shelf B"
    },
    {
        "ITEM_SER": 5628,
        "ITEM_ID": "6505-99-02-06341",
        "DRUG_NAME": "Belimumab 120mg (Benlysta) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 17653,
        "ITEM_ID": "6505-99-02-01501",
        "DRUG_NAME": "Belimumab 200mg (Benlysta) Prefilled Syringe",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5460,
        "ITEM_ID": "6505-99-02-06451",
        "DRUG_NAME": "Belimumab 400mg (Benlysta) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6453,
        "ITEM_ID": "6505-99-02-01201",
        "DRUG_NAME": "Benralizumab (Fasenra) 30mg/ml Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5106,
        "ITEM_ID": "6505-99-03-07261",
        "DRUG_NAME": "Bevacizumab 100 MG (Avastin)  InJ.",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 2"
    },
    {
        "ITEM_SER": 5107,
        "ITEM_ID": "6505-99-03-07361",
        "DRUG_NAME": "Bevacizumab 400 MG (Avastin)  InJ.",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 2"
    },
    {
        "ITEM_SER": 2266,
        "ITEM_ID": "6505-99-02-01682",
        "DRUG_NAME": "BiotIN 5mg/ml (Vitamin H) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 36 Shelf A"
    },
    {
        "ITEM_SER": 2233,
        "ITEM_ID": "6505-99-03-01721",
        "DRUG_NAME": "Bleomycin HCl 15mg Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 2"
    },
    {
        "ITEM_SER": 2007,
        "ITEM_ID": "6505-99-02-01761",
        "DRUG_NAME": "Botulinium Toxin A 100IU (Botox) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 2287,
        "ITEM_ID": "6505-99-02-01771",
        "DRUG_NAME": "Botulinium Toxin A 500IU (Dysport) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5604,
        "ITEM_ID": "6505-99-02-13461",
        "DRUG_NAME": "Brinavess 20mg/ml (Vernakalant) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 24 Shelf A"
    },
    {
        "ITEM_SER": 1995,
        "ITEM_ID": "6505-99-02-02210",
        "DRUG_NAME": "CALCitonin 100 IU/ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Fridge 3 Shelf 2"
    },
    {
        "ITEM_SER": 369,
        "ITEM_ID": "6505-99-02-02333",
        "DRUG_NAME": "CARNitin 1gm Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 25 Shelf A"
    },
    {
        "ITEM_SER": 5237,
        "ITEM_ID": "6505-99-02-00471",
        "DRUG_NAME": "CLONIDine 0.15mg/ml (Catapres) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 18 Shelf A"
    },
    {
        "ITEM_SER": 6069,
        "ITEM_ID": "6505-99-06-01902",
        "DRUG_NAME": "COVID 19 VACCINE VIAL",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5736,
        "ITEM_ID": "6505-99-02-02015",
        "DRUG_NAME": "Caffeine 20mg/ml (Peyona) Vial",
        "ITEM_PHYSICAL_LOCATION": "Column 33 Shelf D"
    },
    {
        "ITEM_SER": 2234,
        "ITEM_ID": "6505-99-02-02013",
        "DRUG_NAME": "Caffeine Citrate 40mg/2ml Vial",
        "ITEM_PHYSICAL_LOCATION": "Column 33 Shlef A"
    },
    {
        "ITEM_SER": 367,
        "ITEM_ID": "6505-99-02-02085",
        "DRUG_NAME": "Calcium Chloride 1.36mEq/ml 10ML Injection IV Only",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 3 Shelf A"
    },
    {
        "ITEM_SER": 6234,
        "ITEM_ID": "6505-99-03-02171",
        "DRUG_NAME": "Calcium Folinate 350mg/35mL Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 25 Shelf A"
    },
    {
        "ITEM_SER": 5432,
        "ITEM_ID": "6505-99-03-02161",
        "DRUG_NAME": "Calcium Folinate 50mg Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 25 Shelf A"
    },
    {
        "ITEM_SER": 1549,
        "ITEM_ID": "6505-99-02-20496",
        "DRUG_NAME": "Calcium GLUCONATE 10% w/v-10ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 3 Shelf A"
    },
    {
        "ITEM_SER": 6037,
        "ITEM_ID": "6505-99-02-22030",
        "DRUG_NAME": "Canakinumab 150mg (Ilaris) Vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5456,
        "ITEM_ID": "6505-99-02-08065",
        "DRUG_NAME": "Carbachol 0.01% (Miostat) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 1 Shelf C"
    },
    {
        "ITEM_SER": 2250,
        "ITEM_ID": "6505-99-02-07922",
        "DRUG_NAME": "CarbeTOCIN 100mcg/ml (Pabal) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 47 Shelf B"
    },
    {
        "ITEM_SER": 2245,
        "ITEM_ID": "6505-99-02-02312",
        "DRUG_NAME": "CarboPROST Tromethamine 250mcg/1ml (Hemabate) Injection IM ONLY",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 2"
    },
    {
        "ITEM_SER": 2280,
        "ITEM_ID": "6505-99-02-00571",
        "DRUG_NAME": "Caspofungin 50mg  Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 1"
    },
    {
        "ITEM_SER": 2281,
        "ITEM_ID": "6505-99-02-00591",
        "DRUG_NAME": "Caspofungin 70mg Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 2"
    },
    {
        "ITEM_SER": 2045,
        "ITEM_ID": "6505-99-02-02922",
        "DRUG_NAME": "CefAZoline 1g (Intrazoline) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 3 Shelf A"
    },
    {
        "ITEM_SER": 5823,
        "ITEM_ID": "6505-99-02-02924",
        "DRUG_NAME": "CefAZoline 2g (Intrazoline) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 377,
        "ITEM_ID": "6505-99-02-02754",
        "DRUG_NAME": "CefOTAxime 1g (Claforan) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 3 Shelf C"
    },
    {
        "ITEM_SER": 7,
        "ITEM_ID": "6505-99-02-02904",
        "DRUG_NAME": "CefTAZidime 1g (Fortum) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 3 Shelf B"
    },
    {
        "ITEM_SER": 105,
        "ITEM_ID": "6505-99-02-10767",
        "DRUG_NAME": "CefTRIAXone 1g (Rocephin) I.V. Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 3 Shelf D"
    },
    {
        "ITEM_SER": 1962,
        "ITEM_ID": "6505-99-02-10795",
        "DRUG_NAME": "CefTRIAXone 500mg (Rocephin) I.M.  I.V. Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 2 Shelf C"
    },
    {
        "ITEM_SER": 161,
        "ITEM_ID": "6505-99-02-14327",
        "DRUG_NAME": "CefUROxime Sodium 750mg (Zinacef) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 2 Shelf D"
    },
    {
        "ITEM_SER": 370,
        "ITEM_ID": "6505-99-02-02432",
        "DRUG_NAME": "Cefepim 1g (Maxipime) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 3 Shelf B"
    },
    {
        "ITEM_SER": 8,
        "ITEM_ID": "6505-99-02-04952",
        "DRUG_NAME": "Ceftazidime 2g (Fortum) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 3 Shelf C"
    },
    {
        "ITEM_SER": 2253,
        "ITEM_ID": "6505-99-02-20528",
        "DRUG_NAME": "ChlorPHENIRAMine 10mg (Piriton) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 46 Shelf C"
    },
    {
        "ITEM_SER": 38,
        "ITEM_ID": "6505-99-02-06885",
        "DRUG_NAME": "ChlorpROMAZine 25mg/2ml (Largactil) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 1 Shelf A"
    },
    {
        "ITEM_SER": 373,
        "ITEM_ID": "6505-99-02-02652",
        "DRUG_NAME": "Chorionic Gonadotropin 5000U (Pregnyl) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf A"
    },
    {
        "ITEM_SER": 5357,
        "ITEM_ID": "6505-99-03-05587",
        "DRUG_NAME": "CiNRYZE 500 Iu (Berinert) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6533,
        "ITEM_ID": "6505-99-02-02701",
        "DRUG_NAME": "Cidofovir 375mg/5ml Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 374,
        "ITEM_ID": "6505-99-02-03093",
        "DRUG_NAME": "Ciprofloxacin 200mg Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 2 Shelf A"
    },
    {
        "ITEM_SER": 5418,
        "ITEM_ID": "6505-99-02-12735",
        "DRUG_NAME": "CisAtracurium 10mg/5ml (Nimbex) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 4 Shelf 3"
    },
    {
        "ITEM_SER": 5616,
        "ITEM_ID": "6505-99-02-12742",
        "DRUG_NAME": "CisAtracurium 20mg/10ml (Nimbex) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 4 Shelf 3"
    },
    {
        "ITEM_SER": 5417,
        "ITEM_ID": "6505-99-02-12705",
        "DRUG_NAME": "CisAtracurium 5mg/2.5ml (Nimbex) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 4 Shelf 2"
    },
    {
        "ITEM_SER": 2016,
        "ITEM_ID": "6505-99-02-08391",
        "DRUG_NAME": "Clarithromycin 500mg (Klacid) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 1 Shelf A"
    },
    {
        "ITEM_SER": 379,
        "ITEM_ID": "6505-99-02-02776",
        "DRUG_NAME": "Clindamycin 300mg (Dalacin) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 1 Shelf B"
    },
    {
        "ITEM_SER": 380,
        "ITEM_ID": "6505-99-02-02822",
        "DRUG_NAME": "Clindamycin 600mg (Dalacin) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 1 Shelf D"
    },
    {
        "ITEM_SER": 75,
        "ITEM_ID": "6505-99-02-08594",
        "DRUG_NAME": "Cloxacillin 250mg Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 1 Shelf C"
    },
    {
        "ITEM_SER": 5230,
        "ITEM_ID": "6505-99-02-11091",
        "DRUG_NAME": "Co-Trimoxazole 400/80mg-5ml (Septrin) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 6 Shelf B"
    },
    {
        "ITEM_SER": 382,
        "ITEM_ID": "6505-99-02-11102",
        "DRUG_NAME": "Colomycin 1 million iu Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6525,
        "ITEM_ID": "6505-99-02-00301",
        "DRUG_NAME": "Crizanlizumab 100mg/10ml (Adakveo) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 2240,
        "ITEM_ID": "6505-99-03-04541",
        "DRUG_NAME": "CycloPHOSPHAMIDE 1G Vial (ENDOXAN)",
        "ITEM_PHYSICAL_LOCATION": "Column 52 Shelf B"
    },
    {
        "ITEM_SER": 399,
        "ITEM_ID": "6505-99-02-04277",
        "DRUG_NAME": "DOBUtamine HCl 250mg/20ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 18 Shelf C"
    },
    {
        "ITEM_SER": 18003,
        "ITEM_ID": "6505-99-02-04273",
        "DRUG_NAME": "DOBUtamine HCl 250mg/5ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 18 Shelf C"
    },
    {
        "ITEM_SER": 400,
        "ITEM_ID": "6505-99-02-04333",
        "DRUG_NAME": "DOPAmine HCl 200mg/5ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 18 Shelf C"
    },
    {
        "ITEM_SER": 5840,
        "ITEM_ID": "6505-99-06-00733",
        "DRUG_NAME": "DT PEDIATRIC (AMP)",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5024,
        "ITEM_ID": "6505-99-02-13072",
        "DRUG_NAME": "Danaproid 750U/0.6ml (Orgaran) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 18 Shelf B"
    },
    {
        "ITEM_SER": 386,
        "ITEM_ID": "6505-99-02-03181",
        "DRUG_NAME": "Dantrolene Sodium 20mg Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 32 Shelf A"
    },
    {
        "ITEM_SER": 6376,
        "ITEM_ID": "6505-99-02-01851",
        "DRUG_NAME": "Daptomycin Noridem 500mg injection",
        "ITEM_PHYSICAL_LOCATION": "Column 7 Shelf A"
    },
    {
        "ITEM_SER": 5734,
        "ITEM_ID": "6505-99-35-00391",
        "DRUG_NAME": "Darbepoetin Alpha 20mcg/.5ml (Aranesp) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 2052,
        "ITEM_ID": "6505-99-35-00401",
        "DRUG_NAME": "Darbepoetin Alpha 40mcg/0.4ml (Aranesp) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 3 Shelf C"
    },
    {
        "ITEM_SER": 2096,
        "ITEM_ID": "6505-99-35-00421",
        "DRUG_NAME": "Darbepoetin Alpha 60mcg/0.3ml (Aranesp) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 3 Shelf B"
    },
    {
        "ITEM_SER": 5022,
        "ITEM_ID": "6505-99-35-00432",
        "DRUG_NAME": "Darbepoetin Alpha100mcg/0.4ml (Aranesp) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 3 Shelf B"
    },
    {
        "ITEM_SER": 5096,
        "ITEM_ID": "6505-99-02-09011",
        "DRUG_NAME": "Denosumab 60mg (Prolia) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 8 Shelf B"
    },
    {
        "ITEM_SER": 5733,
        "ITEM_ID": "6505-99-02-06111",
        "DRUG_NAME": "DexameTHAsone 0.7mg (Ozurdex) injection",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf A"
    },
    {
        "ITEM_SER": 389,
        "ITEM_ID": "6505-99-02-03495",
        "DRUG_NAME": "DexameTHAsone 4mg/ml (Decadron) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 18 Shelf B"
    },
    {
        "ITEM_SER": 5461,
        "ITEM_ID": "6505-99-02-03732",
        "DRUG_NAME": "Dextrose 20% 500ML Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 33 Shelf A"
    },
    {
        "ITEM_SER": 393,
        "ITEM_ID": "6505-99-02-03974",
        "DRUG_NAME": "Diclofenac Sodium 75mg/3ml (Olfen) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 31 Shelf A,B,C"
    },
    {
        "ITEM_SER": 17844,
        "ITEM_ID": "6505-99-35-05901",
        "DRUG_NAME": "Difelikefalin acetate 50mcg/ml (Kapruvia) Vial",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf B"
    },
    {
        "ITEM_SER": 94,
        "ITEM_ID": "6505-99-02-09801",
        "DRUG_NAME": "Digibind 38-40mg Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 1"
    },
    {
        "ITEM_SER": 395,
        "ITEM_ID": "6505-99-02-04061",
        "DRUG_NAME": "Digoxin 500mcg/2ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 18 Shelf C"
    },
    {
        "ITEM_SER": 100,
        "ITEM_ID": "6505-99-02-10091",
        "DRUG_NAME": "Dinoprostone 5mg (Prostin) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 2"
    },
    {
        "ITEM_SER": 2230,
        "ITEM_ID": "6505-99-03-13211",
        "DRUG_NAME": "Disodium Pamidronate  90mg Vial",
        "ITEM_PHYSICAL_LOCATION": "Column 53 Shelf A"
    },
    {
        "ITEM_SER": 140,
        "ITEM_ID": "6505-99-02-13201",
        "DRUG_NAME": "Disodium Pamidronate 30mg (Aredia)  Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 53 Shelf A"
    },
    {
        "ITEM_SER": 2288,
        "ITEM_ID": "6505-99-03-00286",
        "DRUG_NAME": "Doxorubicin 50mg (Ebewe) Vial",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 3"
    },
    {
        "ITEM_SER": 5385,
        "ITEM_ID": "6505-99-02-00061",
        "DRUG_NAME": "Dulaglutide 1.5 mg(TRULIcity) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 5 Shelf B"
    },
    {
        "ITEM_SER": 6561,
        "ITEM_ID": "6505-99-02-00520",
        "DRUG_NAME": "Dupixent 200mg/2ml (Dupilumab) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5632,
        "ITEM_ID": "6505-99-02-13341",
        "DRUG_NAME": "Dupixent 300mg/2ml (Dupilumab) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 4 Shelf D"
    },
    {
        "ITEM_SER": 5747,
        "ITEM_ID": "6505-99-02-22221",
        "DRUG_NAME": "ELOCtate 1000 IU VIAL IV Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 1 Shelf 2"
    },
    {
        "ITEM_SER": 6431,
        "ITEM_ID": "6505-99-02-99131",
        "DRUG_NAME": "EPHEDrine 30mg/10ml Syringe",
        "ITEM_PHYSICAL_LOCATION": "Column 17 Shelf B"
    },
    {
        "ITEM_SER": 170,
        "ITEM_ID": "6505-99-02-20822",
        "DRUG_NAME": "EPHEDrine 30mg/ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 17 Shelf A"
    },
    {
        "ITEM_SER": 5868,
        "ITEM_ID": "6505-99-02-10842",
        "DRUG_NAME": "EPINEPHrine 300mcg (Epipen) Pen",
        "ITEM_PHYSICAL_LOCATION": "Column 17 Shelf A"
    },
    {
        "ITEM_SER": 5459,
        "ITEM_ID": "6505-99-02-00282",
        "DRUG_NAME": "EPINEPHrine junior 150mcg (Epipen) Pen",
        "ITEM_PHYSICAL_LOCATION": "Column 17 Shelf A"
    },
    {
        "ITEM_SER": 5760,
        "ITEM_ID": "6505-99-02-14351",
        "DRUG_NAME": "ERTApenem 1g (Invanz) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5438,
        "ITEM_ID": "6505-99-02-00422",
        "DRUG_NAME": "ETOMidate 2mg/ml/10ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 32 Shelf B"
    },
    {
        "ITEM_SER": 17847,
        "ITEM_ID": "6505-99-02-07941",
        "DRUG_NAME": "Eculizumab 300mg (Soliris) Vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6409,
        "ITEM_ID": "6505-99-02-12122",
        "DRUG_NAME": "Edaravone (Radicut) 30mg injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6164,
        "ITEM_ID": "6505-99-02-12081",
        "DRUG_NAME": "Elosulfase Enzyme 5mg/5ml (Vimizim) Ampoule",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 17529,
        "ITEM_ID": "6505-99-02-22211",
        "DRUG_NAME": "Emicizumab 105mg/0.7ml (Hemlibra) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 17530,
        "ITEM_ID": "6505-99-02-27111",
        "DRUG_NAME": "Emicizumab 150mg/1ml (Hemlibra) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 17661,
        "ITEM_ID": "6505-99-02-11111",
        "DRUG_NAME": "Emicizumab 30mg/1ml (Hemlibra) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 17531,
        "ITEM_ID": "6505-99-02-11161",
        "DRUG_NAME": "Emicizumab 60mg/0.4ml (Hemlibra) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5060,
        "ITEM_ID": "6505-99-02-04553",
        "DRUG_NAME": "Enbrel 50mg (Myclic) pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 2 Shelf C"
    },
    {
        "ITEM_SER": 378,
        "ITEM_ID": "6505-99-02-02768",
        "DRUG_NAME": "Enoxaparin 0.2ml (Clexane) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Column 67 Shelf A"
    },
    {
        "ITEM_SER": 59,
        "ITEM_ID": "6505-99-02-08028",
        "DRUG_NAME": "Enoxaparin 0.4ml (Clexane) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Column 67 Shelf B"
    },
    {
        "ITEM_SER": 1946,
        "ITEM_ID": "6505-99-02-08047",
        "DRUG_NAME": "Enoxaparin 0.6ml (Clexane) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Column 67 Shelf C"
    },
    {
        "ITEM_SER": 61,
        "ITEM_ID": "6505-99-02-08073",
        "DRUG_NAME": "Enoxaparin 0.8ml (Clexane) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Column 67 Shelf D"
    },
    {
        "ITEM_SER": 2044,
        "ITEM_ID": "6505-99-03-04621",
        "DRUG_NAME": "Epirubicin 50mg (Ebewe) Vial",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 3"
    },
    {
        "ITEM_SER": 2024,
        "ITEM_ID": "6505-99-02-04791",
        "DRUG_NAME": "Epoprostenol Sodium 500mcg (Flolan) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 17 Shelf B"
    },
    {
        "ITEM_SER": 17652,
        "ITEM_ID": "6505-99-02-01221",
        "DRUG_NAME": "Eptinezumab 100mg/ml (Vyepti) Vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5887,
        "ITEM_ID": "6505-99-02-23451",
        "DRUG_NAME": "Erenumab 70mg (Aimovig) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 1,
        "ITEM_ID": "6505-99-02-04705",
        "DRUG_NAME": "Esmolol 100mg/10ml (Brevibloc) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 17 Shelf C"
    },
    {
        "ITEM_SER": 5261,
        "ITEM_ID": "6505-99-02-08792",
        "DRUG_NAME": "Esomeprazol 40mg (Nexium) Vial",
        "ITEM_PHYSICAL_LOCATION": "Column 47 Shelf C"
    },
    {
        "ITEM_SER": 394,
        "ITEM_ID": "6505-99-02-04005",
        "DRUG_NAME": "Etamsylate 250mg/2ml (Dicynon) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 17 Shelf B"
    },
    {
        "ITEM_SER": 2082,
        "ITEM_ID": "6505-99-02-04552",
        "DRUG_NAME": "Etanercept 50mg (Enbrel) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 17500,
        "ITEM_ID": "6505-99-35-00771",
        "DRUG_NAME": "Etelcalcetide 10mg/2ml (Parsabiv) I.V",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 4 Shelf B"
    },
    {
        "ITEM_SER": 17501,
        "ITEM_ID": "6505-99-35-16061",
        "DRUG_NAME": "Etelcalcetide 2.5mg/0.5ml (Parsabiv) I.V",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 4 Shelf C"
    },
    {
        "ITEM_SER": 5788,
        "ITEM_ID": "6505-99-35-00741",
        "DRUG_NAME": "Etelcalcetide 5mg/ml (Parsabiv) I.V",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 4 Shelf B"
    },
    {
        "ITEM_SER": 404,
        "ITEM_ID": "6505-99-02-04663",
        "DRUG_NAME": "Ethanolamine Oleate 5% Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 17 Shelf C"
    },
    {
        "ITEM_SER": 5437,
        "ITEM_ID": "6505-99-02-13451",
        "DRUG_NAME": "Evolocumab 140mg/ml (Repatha) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 8 Shelf C"
    },
    {
        "ITEM_SER": 5386,
        "ITEM_ID": "6505-99-02-00021",
        "DRUG_NAME": "Exenatide 2MG (bydureon)  INJECTION",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 8 Shelf C"
    },
    {
        "ITEM_SER": 5363,
        "ITEM_ID": "6505-99-02-13641",
        "DRUG_NAME": "Eye Vision Blue Syring",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 1 Shelf B"
    },
    {
        "ITEM_SER": 1959,
        "ITEM_ID": "6505-99-02-04891",
        "DRUG_NAME": "FLUCOnazol 200mg (Diflucan) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 53 Shelf A"
    },
    {
        "ITEM_SER": 5108,
        "ITEM_ID": "6505-99-02-04904",
        "DRUG_NAME": "FLurescein sod 200mg/1ml ampoule",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 1 Shelf D"
    },
    {
        "ITEM_SER": 358,
        "ITEM_ID": "6505-99-02-00971",
        "DRUG_NAME": "FUNGIZONE 50mg (Amphotericin) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6521,
        "ITEM_ID": "6505-99-02-00361",
        "DRUG_NAME": "Factor Prothrombin (Octaplex) 500IU Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 1 Shelf 1"
    },
    {
        "ITEM_SER": 5464,
        "ITEM_ID": "6505-99-02-05981",
        "DRUG_NAME": "Factor VII 1mg (Novoseven) Vial",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf B"
    },
    {
        "ITEM_SER": 5721,
        "ITEM_ID": "6505-99-02-05890",
        "DRUG_NAME": "Feiba 1000 IU VIAL",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5098,
        "ITEM_ID": "6505-99-02-05841",
        "DRUG_NAME": "Ferric Carboxymaltose 500mg/10ml (Ferinject) Infusion Vial",
        "ITEM_PHYSICAL_LOCATION": "Column 25 Shelf B"
    },
    {
        "ITEM_SER": 70,
        "ITEM_ID": "6505-99-03-08491",
        "DRUG_NAME": "Filgrastim 0.3mg (Neupogen) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 1"
    },
    {
        "ITEM_SER": 2017,
        "ITEM_ID": "6505-99-02-04862",
        "DRUG_NAME": "FlUcloxacillin 250mg Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 7 Shelf A"
    },
    {
        "ITEM_SER": 2274,
        "ITEM_ID": "6505-99-02-04962",
        "DRUG_NAME": "FlUcloxacillin 500mg Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 6 Shelf D"
    },
    {
        "ITEM_SER": 360,
        "ITEM_ID": "6505-99-02-01151",
        "DRUG_NAME": "Flumazenil 0.5mg/5ml (Anexate) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 26 Shelf A"
    },
    {
        "ITEM_SER": 6339,
        "ITEM_ID": "6505-99-02-11440",
        "DRUG_NAME": "Fluocinolone Acetonide 190mcg Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5269,
        "ITEM_ID": "6505-99-02-20011",
        "DRUG_NAME": "Follitropin 150 IU Pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 8 Shelf B"
    },
    {
        "ITEM_SER": 5476,
        "ITEM_ID": "6565-99-02-20021",
        "DRUG_NAME": "Follitropin 225 IU Syring",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 8 Shelf B"
    },
    {
        "ITEM_SER": 5342,
        "ITEM_ID": "6505-99-02-10882",
        "DRUG_NAME": "Follitropin 300 IU Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 1 Shelf D"
    },
    {
        "ITEM_SER": 5267,
        "ITEM_ID": "6505-99-02-22011",
        "DRUG_NAME": "Follitropin alfa 450 IU Pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 8 Shelf B"
    },
    {
        "ITEM_SER": 2099,
        "ITEM_ID": "6505-99-02-10631",
        "DRUG_NAME": "Follitropin alfa 75 IU Syring",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf B"
    },
    {
        "ITEM_SER": 6247,
        "ITEM_ID": "6505-99-02-11331",
        "DRUG_NAME": "Fomepizole 1.5gm/1.5ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 26 Shelf A"
    },
    {
        "ITEM_SER": 5131,
        "ITEM_ID": "6505-99-02-08182",
        "DRUG_NAME": "Fondaparinux 2.5mg (Arixtra) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf B"
    },
    {
        "ITEM_SER": 6532,
        "ITEM_ID": "6505-99-02-00112",
        "DRUG_NAME": "Fosfomycin 4g/100ml (Fomicyt) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 6 Shelf C"
    },
    {
        "ITEM_SER": 39,
        "ITEM_ID": "6505-99-02-06934",
        "DRUG_NAME": "Furosemide 20mg/2ml (Lasix) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 16 Shelf A"
    },
    {
        "ITEM_SER": 40,
        "ITEM_ID": "6505-99-02-06962",
        "DRUG_NAME": "Furosemide 250mg/25ml (Lasix) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 15 Shelf A"
    },
    {
        "ITEM_SER": 1955,
        "ITEM_ID": "6505-99-02-05051",
        "DRUG_NAME": "GANciclovir 500mg (Cymeven) IV Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 52 Shelf C"
    },
    {
        "ITEM_SER": 5355,
        "ITEM_ID": "6505-99-02-06601",
        "DRUG_NAME": "GOliMumab 50mg (Simponi) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6338,
        "ITEM_ID": "6505-99-02-00491",
        "DRUG_NAME": "Galcanezumab 120mg (Emgality) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6259,
        "ITEM_ID": "6505-99-02-15471",
        "DRUG_NAME": "Galsulfase 5mg/5ml (Naglazyme) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 825,
        "ITEM_ID": "6505-99-02-05111",
        "DRUG_NAME": "Gentamicin 40mg/2ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 6 Shelf D"
    },
    {
        "ITEM_SER": 826,
        "ITEM_ID": "6505-99-02-05156",
        "DRUG_NAME": "Gentamicin 80mg/2ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 7 Shelf B"
    },
    {
        "ITEM_SER": 827,
        "ITEM_ID": "6505-99-02-05171",
        "DRUG_NAME": "Glucagon 1mg Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 3 Shelf 1"
    },
    {
        "ITEM_SER": 831,
        "ITEM_ID": "6505-99-02-12992",
        "DRUG_NAME": "Glyceryl Trinitrate 50mg/10ml (Tridil) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 15 Shelf B"
    },
    {
        "ITEM_SER": 833,
        "ITEM_ID": "6505-99-02-14341",
        "DRUG_NAME": "Goserelin 3.6mg (Zoladex) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 53 Shelf J"
    },
    {
        "ITEM_SER": 2307,
        "ITEM_ID": "6505-99-03-07291",
        "DRUG_NAME": "Goserlin Acetate LA 10.8 mg (Zoladex) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 53 Shelf J"
    },
    {
        "ITEM_SER": 5825,
        "ITEM_ID": "6505-99-02-26011",
        "DRUG_NAME": "Guselkumab 100mg/ml (Tremfya) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5135,
        "ITEM_ID": "6505-99-02-06027",
        "DRUG_NAME": "HUMILIN R 300iu/3ML Cartridge",
        "ITEM_PHYSICAL_LOCATION": "Fridge 4 Shelf 1"
    },
    {
        "ITEM_SER": 5448,
        "ITEM_ID": "6505-99-02-04810",
        "DRUG_NAME": "Haemate p 250 injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 828,
        "ITEM_ID": "6505-99-02-05291",
        "DRUG_NAME": "Haloperidol 5mg/ml (Haldol) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 1 Shelf A"
    },
    {
        "ITEM_SER": 10,
        "ITEM_ID": "6505-99-02-05371",
        "DRUG_NAME": "Heparin 100 I.U/ml/10ml (Leo) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 15 Shelf C"
    },
    {
        "ITEM_SER": 11,
        "ITEM_ID": "6505-99-02-05383",
        "DRUG_NAME": "Heparin 25000 I.U/5ml Vial",
        "ITEM_PHYSICAL_LOCATION": "Column 14 Shelf B"
    },
    {
        "ITEM_SER": 830,
        "ITEM_ID": "6505-99-02-05415",
        "DRUG_NAME": "Heparin Mini 5000 I.U/0.2ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 14 Shelf A"
    },
    {
        "ITEM_SER": 5832,
        "ITEM_ID": "6505-99-06-05431",
        "DRUG_NAME": "Hepatitis A ADULT Vaccine",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5831,
        "ITEM_ID": "6505-99-06-05401",
        "DRUG_NAME": "Hepatitis A vaccine pediatric one dose",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 467,
        "ITEM_ID": "6505-99-06-05601",
        "DRUG_NAME": "Hepatitis B Immunoglobulin 180IU/ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 1 Shelf 1"
    },
    {
        "ITEM_SER": 6432,
        "ITEM_ID": "6505-99-06-05591",
        "DRUG_NAME": "Hepatitis B Immunoglobulin 540-1000IU/ml Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 1623,
        "ITEM_ID": "6505-99-06-05473",
        "DRUG_NAME": "Hepatitis B Vaccine Adults 1ml",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 1622,
        "ITEM_ID": "6505-99-06-05443",
        "DRUG_NAME": "Hepatitis B Vaccine Pediatrics one Dose",
        "ITEM_PHYSICAL_LOCATION": "Fridge 1 Shelf 3"
    },
    {
        "ITEM_SER": 349,
        "ITEM_ID": "6505-99-02-00311",
        "DRUG_NAME": "Human Albumin 20% 100ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 27 Shelf A"
    },
    {
        "ITEM_SER": 350,
        "ITEM_ID": "6505-99-02-00372",
        "DRUG_NAME": "Human Albumin 20% 50ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 27 Shelf B"
    },
    {
        "ITEM_SER": 5458,
        "ITEM_ID": "6505-99-02-04871",
        "DRUG_NAME": "Human Fibrinogen (Clottafact) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6030,
        "ITEM_ID": "6505-99-02-32101",
        "DRUG_NAME": "Human Hemin 25mg/ml",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5264,
        "ITEM_ID": "6505-99-02-02091",
        "DRUG_NAME": "Humilin R Pen device",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5367,
        "ITEM_ID": "6505-99-02-05656",
        "DRUG_NAME": "HyaluroNidase 1,500 I.U. (Hyalase) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 1 Shelf C"
    },
    {
        "ITEM_SER": 5097,
        "ITEM_ID": "6505-99-02-13981",
        "DRUG_NAME": "Hyaluronate 20mg/2ml (Hyalgan) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf C"
    },
    {
        "ITEM_SER": 5623,
        "ITEM_ID": "6505-99-02-05301",
        "DRUG_NAME": "Hyaluronate SOD. 1% 0.5ml (Provisc) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 1 Shelf C"
    },
    {
        "ITEM_SER": 5622,
        "ITEM_ID": "6505-99-02-05311",
        "DRUG_NAME": "Hyaluronate SOD. 3% 0.5ML(VISCOAT)  Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 1 Shelf D"
    },
    {
        "ITEM_SER": 362,
        "ITEM_ID": "6505-99-02-00183",
        "DRUG_NAME": "HydrALAzine 20mg (Apresolin) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 15 Shelf C"
    },
    {
        "ITEM_SER": 171,
        "ITEM_ID": "6505-99-02-20887",
        "DRUG_NAME": "Hydrocortisone 100mg/ml vial",
        "ITEM_PHYSICAL_LOCATION": "Column 13 Shelf A,B"
    },
    {
        "ITEM_SER": 12,
        "ITEM_ID": "6505-99-02-05465",
        "DRUG_NAME": "Hydroxy Ethyl Starch 6% (Hestril-Voluven) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 27 Shelf A"
    },
    {
        "ITEM_SER": 2107,
        "ITEM_ID": "6505-99-02-09734",
        "DRUG_NAME": "Hydroxyprogesterone 250mg (Primolut Depot) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf C"
    },
    {
        "ITEM_SER": 366,
        "ITEM_ID": "6505-99-02-01994",
        "DRUG_NAME": "Hyosine 20mg/ml (Buscopan) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 48 Shelf A"
    },
    {
        "ITEM_SER": 5344,
        "ITEM_ID": "6505-99-02-12621",
        "DRUG_NAME": "IMIpenem and Cilastatin 500mg (Tienam) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 7 Shelf B"
    },
    {
        "ITEM_SER": 1960,
        "ITEM_ID": "6505-99-02-06484",
        "DRUG_NAME": "IMMUNOglobulin 2.5g (Intraglobulin) Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 29 Shelf A"
    },
    {
        "ITEM_SER": 1961,
        "ITEM_ID": "6505-99-02-06464",
        "DRUG_NAME": "IMMUNOglobulin 5gm (Intraglobulin) Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 28 Shelf A"
    },
    {
        "ITEM_SER": 2251,
        "ITEM_ID": "6505-99-02-05932",
        "DRUG_NAME": "Ibuprofen 10mg/2ml (Pedea) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 32 Shelf C"
    },
    {
        "ITEM_SER": 5614,
        "ITEM_ID": "6505-99-02-05001",
        "DRUG_NAME": "Idarucizumab 50mg/ml (Praxbind) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 2"
    },
    {
        "ITEM_SER": 17507,
        "ITEM_ID": "6505-99-02-66671",
        "DRUG_NAME": "Idusulfase Enzyme 6mg/ml (Elaprase) Vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6272,
        "ITEM_ID": "6505-99-02-15441",
        "DRUG_NAME": "Imiglucerase 400IU (Cerezyme) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 17662,
        "ITEM_ID": "6505-99-02-06531",
        "DRUG_NAME": "InFLIXimab Recombinant 100mg (Remcima) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 2006,
        "ITEM_ID": "6505-99-02-06534",
        "DRUG_NAME": "InFLIXimab Recombinant 100mg (Remicade) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 2 Shelf D"
    },
    {
        "ITEM_SER": 17658,
        "ITEM_ID": "6505-99-02-03301",
        "DRUG_NAME": "Inclisiran 284mg (Leqvio) Prefilled Syringe",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 21,
        "ITEM_ID": "6505-99-02-06052",
        "DRUG_NAME": "Insulin (R)  (Actrapid) vial",
        "ITEM_PHYSICAL_LOCATION": "Fridge 4 Shelf A"
    },
    {
        "ITEM_SER": 24,
        "ITEM_ID": "6505-99-02-06162",
        "DRUG_NAME": "Insulin 30/70 (Mixtard) vial",
        "ITEM_PHYSICAL_LOCATION": "Fridge 3 Shelf A"
    },
    {
        "ITEM_SER": 5671,
        "ITEM_ID": "6505-99-02-07201",
        "DRUG_NAME": "Insulin Degludec (TRESIba) pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 5 Shelf C"
    },
    {
        "ITEM_SER": 5057,
        "ITEM_ID": "6505-99-02-06142",
        "DRUG_NAME": "Insulin Detemir ( Levemir ) Pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 7 Shelf B"
    },
    {
        "ITEM_SER": 5471,
        "ITEM_ID": "6505-99-02-00272",
        "DRUG_NAME": "Insulin Glargine 300 IU/ML/ML(TOUJeo) Pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 6 Shelf D"
    },
    {
        "ITEM_SER": 5176,
        "ITEM_ID": "6505-99-02-06192",
        "DRUG_NAME": "Insulin Glulisine (Apidra) Pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 8 Shelf B"
    },
    {
        "ITEM_SER": 22,
        "ITEM_ID": "6505-99-02-00151",
        "DRUG_NAME": "Insulin Lispro (HumaLOG ) Pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 8 Shelf D"
    },
    {
        "ITEM_SER": 5175,
        "ITEM_ID": "6505-99-02-00121",
        "DRUG_NAME": "Insulin Lispro MIX 25/75 100IU/ml (HumaLOG MIX) Pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 8 Shelf D"
    },
    {
        "ITEM_SER": 5174,
        "ITEM_ID": "6505-99-02-05031",
        "DRUG_NAME": "Insulin Lispro MIX 50/50 100UI/ml ( HumaLOG MIX) Pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 8 Shelf C"
    },
    {
        "ITEM_SER": 25,
        "ITEM_ID": "6505-99-02-06303",
        "DRUG_NAME": "Insulin N (Insulatard) Vial",
        "ITEM_PHYSICAL_LOCATION": "Fridge 4 Shelf 2"
    },
    {
        "ITEM_SER": 2158,
        "ITEM_ID": "6505-99-02-06186",
        "DRUG_NAME": "Insulin Solostar ( Lantus ) Pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 7 Shelf D"
    },
    {
        "ITEM_SER": 1947,
        "ITEM_ID": "6505-99-02-06172",
        "DRUG_NAME": "Insulin Solostar ( Lantus ) Vial",
        "ITEM_PHYSICAL_LOCATION": "Fridge 3 Shelf 4"
    },
    {
        "ITEM_SER": 2157,
        "ITEM_ID": "6505-99-02-06012",
        "DRUG_NAME": "Insulin Ultra Short (NovoRAPID) Pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 7 Shelf C"
    },
    {
        "ITEM_SER": 2160,
        "ITEM_ID": "6505-99-02-06102",
        "DRUG_NAME": "Insulin Ultra Short (NovoRapid) Vial",
        "ITEM_PHYSICAL_LOCATION": "Fridge 4 Shelf 4"
    },
    {
        "ITEM_SER": 5766,
        "ITEM_ID": "6505-99-03-06420",
        "DRUG_NAME": "Interferon Alpha 2A 3 MILLION Vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 2285,
        "ITEM_ID": "6505-99-02-06440",
        "DRUG_NAME": "Interferon Beta 30mcg/ml (Avonex) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5170,
        "ITEM_ID": "6505-99-02-06431",
        "DRUG_NAME": "Interferon Beta-1a (Rebif 22mcg) 6m.u",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5449,
        "ITEM_ID": "6505-99-02-00221",
        "DRUG_NAME": "Interferon Beta-1a 44mcg (Rebif M Dose) 4crt",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5419,
        "ITEM_ID": "6505-99-14-06450",
        "DRUG_NAME": "Interferon-Beta-1a (Rebif 44mcg) 12m.u",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 19,
        "ITEM_ID": "6505-99-02-05943",
        "DRUG_NAME": "Iron Saccharate 100mg/5ml (Ferosac) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 30 Shelf B"
    },
    {
        "ITEM_SER": 31,
        "ITEM_ID": "6505-99-02-16553",
        "DRUG_NAME": "Isoprenaline 0.2mg/ml (Isuprel) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 13 Shelf C"
    },
    {
        "ITEM_SER": 5615,
        "ITEM_ID": "6505-99-02-01790",
        "DRUG_NAME": "Ixekizumab 80 MG (Taltz) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 37,
        "ITEM_ID": "6505-99-02-0682",
        "DRUG_NAME": "Ketamine HCl 250MG/5ML Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 36,
        "ITEM_ID": "6505-99-02-06825",
        "DRUG_NAME": "Ketamine HCl 500MG/10ML Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 32 Shelf C"
    },
    {
        "ITEM_SER": 5422,
        "ITEM_ID": "6505-99-02-04931",
        "DRUG_NAME": "Kogenate 1000 IU (REC.Factor 8) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5421,
        "ITEM_ID": "6505-99-02-04831",
        "DRUG_NAME": "Kogenate 500 IU (REC.Factor 8) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5246,
        "ITEM_ID": "6505-99-02-55552",
        "DRUG_NAME": "LEVObubivacain 5mg/ml (Chirocaine) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 137,
        "ITEM_ID": "6505-99-02-12764",
        "DRUG_NAME": "Labetalol HCl 100mg/20ml (Trandate) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 12 Shelf A"
    },
    {
        "ITEM_SER": 17654,
        "ITEM_ID": "6505-99-02-11961",
        "DRUG_NAME": "Lanreotide 120mg/0.5ml (Somatuline) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6550,
        "ITEM_ID": "6505-99-60-07392",
        "DRUG_NAME": "Lanreotide 60mg/0.2ml (Somatuline) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6163,
        "ITEM_ID": "6505-99-02-15461",
        "DRUG_NAME": "Laronidase 100 iu/ml/5ml (Aldurazyme) Ampoule",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5401,
        "ITEM_ID": "6505-99-02-13311",
        "DRUG_NAME": "Leuprorelin 11.25mg (Lupron) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 53 Shelf J"
    },
    {
        "ITEM_SER": 2088,
        "ITEM_ID": "6505-99-02-14311",
        "DRUG_NAME": "Leuprorelin 3.75mg (Lupron) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 53 Shelf K"
    },
    {
        "ITEM_SER": 2247,
        "ITEM_ID": "6505-99-02-09242",
        "DRUG_NAME": "LevETIRAcetam 500mg/5ml (Keppra) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 40 Shelf 4"
    },
    {
        "ITEM_SER": 2277,
        "ITEM_ID": "6505-99-02-14431",
        "DRUG_NAME": "LevOFLOXacin 500mg/100ml (Tavanic) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 7 Shelf C"
    },
    {
        "ITEM_SER": 2051,
        "ITEM_ID": "6505-99-02-07283",
        "DRUG_NAME": "Levosimendan 2.5mg/ml (Simdax) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 4 Shelf 3"
    },
    {
        "ITEM_SER": 155,
        "ITEM_ID": "6505-99-02-14026",
        "DRUG_NAME": "Lidocaine 1% 20ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 41 Shelf A"
    },
    {
        "ITEM_SER": 158,
        "ITEM_ID": "6505-99-02-14141",
        "DRUG_NAME": "Lidocaine 2% 50 ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 40 Shelf C"
    },
    {
        "ITEM_SER": 2271,
        "ITEM_ID": "6505-99-02-14042",
        "DRUG_NAME": "Lidocaine press. Free 2% 20ml",
        "ITEM_PHYSICAL_LOCATION": "Column 41 Shelf B"
    },
    {
        "ITEM_SER": 156,
        "ITEM_ID": "6505-99-02-14063",
        "DRUG_NAME": "Lignocaine, Adrenaline LA 2% 1.8ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 41 Shelf C"
    },
    {
        "ITEM_SER": 2279,
        "ITEM_ID": "6505-99-02-01102",
        "DRUG_NAME": "Linezolid 600mg/300ml (Zyvox) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 8 Shelf B"
    },
    {
        "ITEM_SER": 43,
        "ITEM_ID": "6505-99-02-07182",
        "DRUG_NAME": "Lipid 20% 100ml Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 57 Shelf A"
    },
    {
        "ITEM_SER": 44,
        "ITEM_ID": "6505-99-02-07212",
        "DRUG_NAME": "Lipid 20% 500ml  Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 59 Shelf B"
    },
    {
        "ITEM_SER": 17551,
        "ITEM_ID": "6505-99-02-01141",
        "DRUG_NAME": "Luspatercept 25mg (Reblozyl) vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 17520,
        "ITEM_ID": "6505-99-02-00141",
        "DRUG_NAME": "Luspatercept 75mg (Reblozyl) vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 50,
        "ITEM_ID": "6505-99-02-0769",
        "DRUG_NAME": "MEROpenem 0.5g (Meronem) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 73 Shelf A"
    },
    {
        "ITEM_SER": 49,
        "ITEM_ID": "6505-99-02-07682",
        "DRUG_NAME": "MEROpenem 1gm (Meronem) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 79 Shelf A"
    },
    {
        "ITEM_SER": 5835,
        "ITEM_ID": "6505-99-06-15354",
        "DRUG_NAME": "MMR VACCINE+DILLUENT (AMP)",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 45,
        "ITEM_ID": "6505-99-02-07394",
        "DRUG_NAME": "Magnesium Sulphate 10-20% 0.8ml/eq/ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 4 Shelf A"
    },
    {
        "ITEM_SER": 46,
        "ITEM_ID": "6505-99-02-07416",
        "DRUG_NAME": "Magnesium Sulphate 50% 2.5g/5ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 3 Shelf C"
    },
    {
        "ITEM_SER": 47,
        "ITEM_ID": "6505-99-02-07456",
        "DRUG_NAME": "Mannitol 10% 500ml Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 60 Shelf A"
    },
    {
        "ITEM_SER": 48,
        "ITEM_ID": "6505-99-02-07544",
        "DRUG_NAME": "Mannitol 20% 500ml Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 59 Shelf A"
    },
    {
        "ITEM_SER": 16,
        "ITEM_ID": "6505-99-02-05624",
        "DRUG_NAME": "Menotrophin (FSH/LH) 75 U (Humegon) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf D"
    },
    {
        "ITEM_SER": 5787,
        "ITEM_ID": "6505-99-02-65651",
        "DRUG_NAME": "Mepolizumab 100mg (Nucala) Vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 2,
        "ITEM_ID": "6505-99-02-02892",
        "DRUG_NAME": "MetRONIDAZOLE 500mg (Flagyl) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 73 Shelf A"
    },
    {
        "ITEM_SER": 5475,
        "ITEM_ID": "6505-99-02-07981",
        "DRUG_NAME": "MethoTRexate 15mg PF.SYRING",
        "ITEM_PHYSICAL_LOCATION": "Column 52 Shelf D"
    },
    {
        "ITEM_SER": 5597,
        "ITEM_ID": "6505-99-02-07871",
        "DRUG_NAME": "MethoTRexate 20mg PF.SYRING",
        "ITEM_PHYSICAL_LOCATION": "Column 52 Shelf D"
    },
    {
        "ITEM_SER": 5598,
        "ITEM_ID": "6505-99-02-07881",
        "DRUG_NAME": "MethoTRexate 25mg PF.SYRING",
        "ITEM_PHYSICAL_LOCATION": "Column 52 Shelf G"
    },
    {
        "ITEM_SER": 6235,
        "ITEM_ID": "6505-99-02-0797B",
        "DRUG_NAME": "MethoTRexate 50mg/5ml Vial",
        "ITEM_PHYSICAL_LOCATION": "Column 52 Shelf E"
    },
    {
        "ITEM_SER": 56,
        "ITEM_ID": "6505-99-02-0796A",
        "DRUG_NAME": "Methotrexate 50mg/2ml Vial",
        "ITEM_PHYSICAL_LOCATION": "Column 52 Shelf F"
    },
    {
        "ITEM_SER": 55,
        "ITEM_ID": "6505-99-02-07935",
        "DRUG_NAME": "Methyl Ergometrin (Methergin) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 2"
    },
    {
        "ITEM_SER": 63,
        "ITEM_ID": "6505-99-02-08092",
        "DRUG_NAME": "Methylene Blue 10mg/ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 30 Shelf A"
    },
    {
        "ITEM_SER": 6026,
        "ITEM_ID": "6505-99-02-11772",
        "DRUG_NAME": "Methylprednisolone 125mg (SOLU medrol) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 12 Shelf C"
    },
    {
        "ITEM_SER": 122,
        "ITEM_ID": "6505-99-02-11801",
        "DRUG_NAME": "Methylprednisolone 1gm (SOLU medrol) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 11 Shelf A"
    },
    {
        "ITEM_SER": 387,
        "ITEM_ID": "6505-99-02-03312",
        "DRUG_NAME": "Methylprednisolone 40mg (DEPO medrol) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 11 Shelf B"
    },
    {
        "ITEM_SER": 6179,
        "ITEM_ID": "6505-99-02-11831",
        "DRUG_NAME": "Methylprednisolone 40mg (SOLU medrol) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 121,
        "ITEM_ID": "6505-99-02-11741",
        "DRUG_NAME": "Methylprednisolone 500mg (SOLU medrol) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 11 Shelf B"
    },
    {
        "ITEM_SER": 95,
        "ITEM_ID": "6505-99-02-09851",
        "DRUG_NAME": "MetocloPramide 10mg/2ml (Primperan) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 42 Shelf A"
    },
    {
        "ITEM_SER": 5236,
        "ITEM_ID": "6505-99-02-08152",
        "DRUG_NAME": "MilRinone 10mg/10ml (Primacor) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 11 Shelf C"
    },
    {
        "ITEM_SER": 5020,
        "ITEM_ID": "6505-99-35-00631",
        "DRUG_NAME": "Mircera 100mcg/0.3ml Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 3"
    },
    {
        "ITEM_SER": 2163,
        "ITEM_ID": "6505-99-35-00601",
        "DRUG_NAME": "Mircera 150mcg/0.3ml Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 2"
    },
    {
        "ITEM_SER": 5021,
        "ITEM_ID": "6505-99-35-00611",
        "DRUG_NAME": "Mircera 200mcg/0.3ml Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 3"
    },
    {
        "ITEM_SER": 6405,
        "ITEM_ID": "6505-99-03-08121",
        "DRUG_NAME": "Mitomycin 20mg injection",
        "ITEM_PHYSICAL_LOCATION": "Column 52 Shelf F"
    },
    {
        "ITEM_SER": 2273,
        "ITEM_ID": "6505-99-02-14421",
        "DRUG_NAME": "Moxifloxacin 400mg/250ml (Avalox) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 9 Shelf A"
    },
    {
        "ITEM_SER": 6073,
        "ITEM_ID": "6505-99-02-31090",
        "DRUG_NAME": "Multivitamins for pediatric TPN",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 3"
    },
    {
        "ITEM_SER": 6551,
        "ITEM_ID": "6505-99-02-08508",
        "DRUG_NAME": "NORadrenalin acid tartrate 8mg/4ml (base 4mg/4ml) Amp",
        "ITEM_PHYSICAL_LOCATION": "Column 21 Shelf A"
    },
    {
        "ITEM_SER": 71,
        "ITEM_ID": "6505-99-02-08506",
        "DRUG_NAME": "NORadrenalin bitartrate 4mg/4ml (base 4mg/4ml) Amp",
        "ITEM_PHYSICAL_LOCATION": "Column 21 Shelf A"
    },
    {
        "ITEM_SER": 5134,
        "ITEM_ID": "6505-99-02-06235",
        "DRUG_NAME": "NOVOPEN ( Actrapid )  Device",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 72,
        "ITEM_ID": "6505-99-02-08521",
        "DRUG_NAME": "Nalbuphine HCl 20mg/2ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 53 Shelf B"
    },
    {
        "ITEM_SER": 65,
        "ITEM_ID": "6505-99-02-08292",
        "DRUG_NAME": "Naloxone 0.4mg/ml (Narcan) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 30 Shelf A"
    },
    {
        "ITEM_SER": 5753,
        "ITEM_ID": "6505-99-02-03201",
        "DRUG_NAME": "Natalizumab 300mg/15ml (Tysabri) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 99,
        "ITEM_ID": "6505-99-02-10031",
        "DRUG_NAME": "Neostigmine 2.5mg/ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 42 Shelf B"
    },
    {
        "ITEM_SER": 17849,
        "ITEM_ID": "6505-99-02-02471",
        "DRUG_NAME": "Nirsevimab 100mg/ml (Beyfortus) Syringe",
        "ITEM_PHYSICAL_LOCATION": "Fridge 1 Shelf 2"
    },
    {
        "ITEM_SER": 17842,
        "ITEM_ID": "6505-99-02-02451",
        "DRUG_NAME": "Nirsevimab 50mg/0.5ml (Beyfortus) Syringe",
        "ITEM_PHYSICAL_LOCATION": "Fridge 1 Shelf 2"
    },
    {
        "ITEM_SER": 2301,
        "ITEM_ID": "6505-99-02-06042",
        "DRUG_NAME": "NovoMIX Flexpen 100IU/ml",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 6 Shelf B"
    },
    {
        "ITEM_SER": 5750,
        "ITEM_ID": "6505-99-02-87540",
        "DRUG_NAME": "Nusinersen 12mg (Spinraza) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5793,
        "ITEM_ID": "6505-99-02-35791",
        "DRUG_NAME": "Ocrelizumab 300mg/10ml (Ocrevus) Vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 127,
        "ITEM_ID": "6505-99-02-12002",
        "DRUG_NAME": "Octreotide 100mcg (Sandostatin) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 3"
    },
    {
        "ITEM_SER": 2009,
        "ITEM_ID": "6505-99-02-11981",
        "DRUG_NAME": "Octreotide L.A.R. 30mg (Sandostatin) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 4 Shelf B"
    },
    {
        "ITEM_SER": 17508,
        "ITEM_ID": "6505-99-02-01211",
        "DRUG_NAME": "Ofatumumab 20mg/0.4ml (Kesimpta) Pen",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 3"
    },
    {
        "ITEM_SER": 17649,
        "ITEM_ID": "6505-99-02-01551",
        "DRUG_NAME": "Olipudase Alfa Enzyme 20mg (Xenpozyme) Vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5058,
        "ITEM_ID": "6505-99-02-20531",
        "DRUG_NAME": "Omalizumab 150mg (Xolair) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 1 Shelf B"
    },
    {
        "ITEM_SER": 1944,
        "ITEM_ID": "6505-99-02-08771",
        "DRUG_NAME": "Omeprazole 40mg (Losec) Vial",
        "ITEM_PHYSICAL_LOCATION": "Column 48 Shelf B"
    },
    {
        "ITEM_SER": 6568,
        "ITEM_ID": "6505-99-02-50501",
        "DRUG_NAME": "Omnitrope (Surepal) 5 Pen Device",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 7 Shelf C"
    },
    {
        "ITEM_SER": 162,
        "ITEM_ID": "6505-99-02-14372",
        "DRUG_NAME": "Ondansetron 4mg/2ml (Zofran) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 44 Shelf A"
    },
    {
        "ITEM_SER": 5779,
        "ITEM_ID": "6505-99-02-14336",
        "DRUG_NAME": "Ondansetron 8mg/4ml (Zofran) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 43 Shelf A"
    },
    {
        "ITEM_SER": 2062,
        "ITEM_ID": "6505-99-02-06892",
        "DRUG_NAME": "Ornithine Aspartate 5g/10ml  (Hepa-merz) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 30 Shelf C"
    },
    {
        "ITEM_SER": 73,
        "ITEM_ID": "6505-99-02-08532",
        "DRUG_NAME": "Orphenadrine 30mg/ml (Norflex) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 42 Shelf C"
    },
    {
        "ITEM_SER": 76,
        "ITEM_ID": "6505-99-02-08682",
        "DRUG_NAME": "Oxytocin 10U (Syntocinon) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 3"
    },
    {
        "ITEM_SER": 77,
        "ITEM_ID": "6505-99-02-08742",
        "DRUG_NAME": "Oxytocin 5U (Syntocinon) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 4"
    },
    {
        "ITEM_SER": 79,
        "ITEM_ID": "6505-99-02-08866",
        "DRUG_NAME": "PANcuronium Br.4mg/2ml (Pavulon) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 4 Shelf 2"
    },
    {
        "ITEM_SER": 5427,
        "ITEM_ID": "6505-99-02-08951",
        "DRUG_NAME": "PENTAglobulin 10ML (IGA,IGG,IGM) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 1 Shelf 2"
    },
    {
        "ITEM_SER": 90,
        "ITEM_ID": "6505-99-02-09523",
        "DRUG_NAME": "POTASSIUM Phosphate 66mEq(K)+45mEq(PO4) /15ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 3 Shelf D"
    },
    {
        "ITEM_SER": 6433,
        "ITEM_ID": "6505-99-02-55561",
        "DRUG_NAME": "Paliperidone 100mg (Invega Sustenna) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf E"
    },
    {
        "ITEM_SER": 6529,
        "ITEM_ID": "6505-99-02-04751",
        "DRUG_NAME": "Paliperidone 150mg (Invega Sustenna) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf D"
    },
    {
        "ITEM_SER": 6530,
        "ITEM_ID": "6505-99-02-14581",
        "DRUG_NAME": "Paliperidone 350mg (Trevicta) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6531,
        "ITEM_ID": "6505-99-02-98741",
        "DRUG_NAME": "Paliperidone 525mg (Trevicta) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf D"
    },
    {
        "ITEM_SER": 113,
        "ITEM_ID": "6505-99-02-02931",
        "DRUG_NAME": "Palivizumab (Synagis) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6571,
        "ITEM_ID": "6505-99-02-21163",
        "DRUG_NAME": "Papaverine HCl 60mg/2ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 22 Shelf A"
    },
    {
        "ITEM_SER": 2013,
        "ITEM_ID": "6505-99-02-08822",
        "DRUG_NAME": "Paracetamol 1gm (perfelgan) Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 49 Shelf A"
    },
    {
        "ITEM_SER": 5469,
        "ITEM_ID": "6505-99-02-00452",
        "DRUG_NAME": "PareCOXIB 40mg (Dynastate) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 45 Shelf A"
    },
    {
        "ITEM_SER": 5025,
        "ITEM_ID": "6505-99-35-00721",
        "DRUG_NAME": "Paricalcitol 5mcg/ml (Zemplar) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 39 Shelf A"
    },
    {
        "ITEM_SER": 5754,
        "ITEM_ID": "6505-99-02-23141",
        "DRUG_NAME": "Peginterferon 125mcg (Plegridy) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5791,
        "ITEM_ID": "6505-99-02-23511",
        "DRUG_NAME": "Peginterferon 63-94mcg (Plegridy) Pen",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 173,
        "ITEM_ID": "6505-99-02-21333",
        "DRUG_NAME": "PeniciLLIn G 600MG (1MU) (PeniciLLIn Crystalline) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 9 Shelf A"
    },
    {
        "ITEM_SER": 2252,
        "ITEM_ID": "6505-99-02-09264",
        "DRUG_NAME": "Phenylephrine 500mcg/10ml IV Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 22 Shelf A"
    },
    {
        "ITEM_SER": 6463,
        "ITEM_ID": "6505-99-02-99121",
        "DRUG_NAME": "Phenylephrine 500mcg/10ml IV Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Column 22 Shelf C"
    },
    {
        "ITEM_SER": 88,
        "ITEM_ID": "6505-99-02-09253",
        "DRUG_NAME": "Phenytoin 250mg/5ml (Epanutin) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 53 Shelf B"
    },
    {
        "ITEM_SER": 6035,
        "ITEM_ID": "6505-99-02-00011",
        "DRUG_NAME": "Phospholipid 27mg/5ml (Bles) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 1"
    },
    {
        "ITEM_SER": 91,
        "ITEM_ID": "6505-99-02-09558",
        "DRUG_NAME": "Potassium Chloride 15% 20mEq/10ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 4 Shelf C"
    },
    {
        "ITEM_SER": 164,
        "ITEM_ID": "6505-99-02-09912",
        "DRUG_NAME": "PraliDOXIme 200mg/10ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 39 Shelf B"
    },
    {
        "ITEM_SER": 126,
        "ITEM_ID": "6505-99-02-12012",
        "DRUG_NAME": "ProCHLORperazine 12.5mg (Stemetil) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 1 Shelf A"
    },
    {
        "ITEM_SER": 86,
        "ITEM_ID": "6505-99-02-09132",
        "DRUG_NAME": "ProMETHAzine 50mg/2ml (Phenergan) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 47 Shelf A"
    },
    {
        "ITEM_SER": 396,
        "ITEM_ID": "6505-99-02-04197",
        "DRUG_NAME": "Propofol 20ml (Diprivan) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 61 Shelf B"
    },
    {
        "ITEM_SER": 397,
        "ITEM_ID": "6505-99-02-04206",
        "DRUG_NAME": "Propofol 50ml (Diprivan) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 62 Shelf A"
    },
    {
        "ITEM_SER": 18,
        "ITEM_ID": "6505-99-02-05921",
        "DRUG_NAME": "PropraNOLOL HCl 1mg/ml (Inderal) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 22 Shelf C"
    },
    {
        "ITEM_SER": 102,
        "ITEM_ID": "6505-99-02-10187",
        "DRUG_NAME": "Protamine Sulphate 50mg/5ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 39 Shelf B"
    },
    {
        "ITEM_SER": 130,
        "ITEM_ID": "6505-99-02-12191",
        "DRUG_NAME": "Pulm. Surfactant Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 1"
    },
    {
        "ITEM_SER": 104,
        "ITEM_ID": "6505-99-02-10754",
        "DRUG_NAME": "ROcuronium (Esmeron) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 4 Shelf 4"
    },
    {
        "ITEM_SER": 2228,
        "ITEM_ID": "6505-99-06-00171",
        "DRUG_NAME": "Rabies Imm. Globulin Human 300iu/2ml",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6434,
        "ITEM_ID": "6505-99-06-00191",
        "DRUG_NAME": "Rabies Vaccine H.D. One Dose",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5354,
        "ITEM_ID": "6505-99-02-67031",
        "DRUG_NAME": "Ranibizumzb (Lucentis) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5864,
        "ITEM_ID": "6505-99-03-24552",
        "DRUG_NAME": "Rasburicase 1.5MG/5ML Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5863,
        "ITEM_ID": "6505-99-03-24561",
        "DRUG_NAME": "Rasburicase 7.5MG/5ML Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6116,
        "ITEM_ID": "6505-99-02-99992",
        "DRUG_NAME": "Remdesivir 100mg injection",
        "ITEM_PHYSICAL_LOCATION": "Column 9 Shelf B"
    },
    {
        "ITEM_SER": 2295,
        "ITEM_ID": "6505-99-03-07221",
        "DRUG_NAME": "RiTUXimab 100mg/10ml( Mabthera) injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 1 Shelf 1"
    },
    {
        "ITEM_SER": 2296,
        "ITEM_ID": "6505-99-03-07231",
        "DRUG_NAME": "RiTUXimab 500MG/50ML( Mabthera) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 1 Shelf 1"
    },
    {
        "ITEM_SER": 5229,
        "ITEM_ID": "6505-99-02-10531",
        "DRUG_NAME": "RifaMPICIN 600mg (Rifadin) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 9 Shelf B"
    },
    {
        "ITEM_SER": 17499,
        "ITEM_ID": "6505-99-02-26021",
        "DRUG_NAME": "Risankizumab 360mg/2.4ml (Skyrizi) Cartridge",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 17498,
        "ITEM_ID": "6505-99-02-26031",
        "DRUG_NAME": "Risankizumab 600mg/10ml (Skyrizi) Vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 17511,
        "ITEM_ID": "6505-99-02-03001",
        "DRUG_NAME": "Risankizumab 75mg (Skyrizi) PFS",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 2300,
        "ITEM_ID": "6505-99-02-07241",
        "DRUG_NAME": "Romiplostim 250mcg (N-plate) Vial",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 4 Shelf C"
    },
    {
        "ITEM_SER": 6452,
        "ITEM_ID": "6505-99-02-00901",
        "DRUG_NAME": "Romosozumab 105mg/1.17ml (Evenity) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6370,
        "ITEM_ID": "6505-99-02-01430",
        "DRUG_NAME": "Ryzodeg FlexTouch (Insulin aspart 30iu/ Insulin degludec 70iu)",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 6 Shelf B"
    },
    {
        "ITEM_SER": 5239,
        "ITEM_ID": "6505-99-02-11621",
        "DRUG_NAME": "SODIUM ThIOsulfate 250mg/ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 39 Shelf C"
    },
    {
        "ITEM_SER": 5470,
        "ITEM_ID": "6505-99-02-98651",
        "DRUG_NAME": "SUMAtriptan succ. 6mg (Imigran-sc.) P.F.S",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf D"
    },
    {
        "ITEM_SER": 144,
        "ITEM_ID": "6505-99-02-04942",
        "DRUG_NAME": "SalbutamOL 0.5mg/ml (Ventolin) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 47 Shelf A"
    },
    {
        "ITEM_SER": 5238,
        "ITEM_ID": "6505-99-02-10962",
        "DRUG_NAME": "Saline Hypertonic 10%w/v 500ml (Sodium Chloride) Infusion",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 5 Shelf A"
    },
    {
        "ITEM_SER": 5439,
        "ITEM_ID": "6505-99-02-10992",
        "DRUG_NAME": "Saline Hypertonic 3% 500ml (Sodium Chloride) Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 64 Shelf B"
    },
    {
        "ITEM_SER": 5290,
        "ITEM_ID": "6505-99-02-01782",
        "DRUG_NAME": "Secukinumab 150mg/ml (Cosyntex) Pen",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 2257,
        "ITEM_ID": "6505-99-02-11393",
        "DRUG_NAME": "Sodium Benzoate 1G/5ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 39 Shelf C"
    },
    {
        "ITEM_SER": 117,
        "ITEM_ID": "6505-99-02-11433",
        "DRUG_NAME": "Sodium Bicarbonate 8.4%(50mEq/50ml) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 5 Shelf C"
    },
    {
        "ITEM_SER": 119,
        "ITEM_ID": "6505-99-02-11653",
        "DRUG_NAME": "Sodium Nitroprusside 50mg/2ml (Nipride) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 23 Shelf A"
    },
    {
        "ITEM_SER": 118,
        "ITEM_ID": "6505-99-02-11592",
        "DRUG_NAME": "Sodium PHosphate (Na 1.33mmol - PO4 0.66mmol)/ml, 10ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 5 Shelf A"
    },
    {
        "ITEM_SER": 6369,
        "ITEM_ID": "6505-99-02-10942",
        "DRUG_NAME": "Sodium Tetradecyl Sulfate 3% 5ml (Fibrovein)",
        "ITEM_PHYSICAL_LOCATION": "Column 23 Shelf A"
    },
    {
        "ITEM_SER": 6248,
        "ITEM_ID": "6505-99-02-00431",
        "DRUG_NAME": "Soliqua 100/33 (Insulin Glargine 100iu/Lixisenatide 33mcg) Pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 6 Shelf C"
    },
    {
        "ITEM_SER": 6296,
        "ITEM_ID": "6505-99-02-00441",
        "DRUG_NAME": "Soliqua 100/50 (Insulin Glargine 100iu/Lixisenatide 50mcg) Pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 6 Shelf C"
    },
    {
        "ITEM_SER": 124,
        "ITEM_ID": "6505-99-02-11991",
        "DRUG_NAME": "Somatostatin 250mcg Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 39 Shelf C"
    },
    {
        "ITEM_SER": 123,
        "ITEM_ID": "6505-99-02-11971",
        "DRUG_NAME": "Somatostatin 3mg Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 39 Shelf C"
    },
    {
        "ITEM_SER": 17517,
        "ITEM_ID": "6505-99-02-05581",
        "DRUG_NAME": "Somatropin 12mg (Genotropin) 1ml Prefilled Pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 5 Shelf B"
    },
    {
        "ITEM_SER": 2299,
        "ITEM_ID": "6505-99-02-05571",
        "DRUG_NAME": "Somatropin 5mg/1.5ml (Omnitrope) Cartridge",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 6 Shelf D"
    },
    {
        "ITEM_SER": 257,
        "ITEM_ID": "6505-99-02-21631",
        "DRUG_NAME": "Streptomycin 1g Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 10 Shelf A"
    },
    {
        "ITEM_SER": 5605,
        "ITEM_ID": "6505-99-02-11062",
        "DRUG_NAME": "Sugammadex 200mg/2ml (Bridion) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 46 Shelf A"
    },
    {
        "ITEM_SER": 112,
        "ITEM_ID": "6505-99-02-11051",
        "DRUG_NAME": "Suxamethonium 100mg/2ml (Scolin) Vial",
        "ITEM_PHYSICAL_LOCATION": "Column 45 Shelf B"
    },
    {
        "ITEM_SER": 2020,
        "ITEM_ID": "6505-99-02-00041",
        "DRUG_NAME": "Synactin 0.25mg (Acth) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Fridge 4 Shelf 2"
    },
    {
        "ITEM_SER": 2021,
        "ITEM_ID": "6505-99-02-00101",
        "DRUG_NAME": "Synactin 1mg (Acth) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Fridge 4 Shelf 2"
    },
    {
        "ITEM_SER": 5841,
        "ITEM_ID": "6505-99-06-00781",
        "DRUG_NAME": "TD  (AMP)",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 345,
        "ITEM_ID": "6505-99-02-00191",
        "DRUG_NAME": "TENECTEplase 10,000U (Metalyse) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 23 Shelf A"
    },
    {
        "ITEM_SER": 2276,
        "ITEM_ID": "6505-99-02-09352",
        "DRUG_NAME": "Tazocin 2.25 gm (Piperacillin,Tazobactam) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 9 Shelf B"
    },
    {
        "ITEM_SER": 89,
        "ITEM_ID": "6505-99-02-09341",
        "DRUG_NAME": "Tazocin 4.5 gm (Piperacillin,Tazobactam) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 9 Shelf D"
    },
    {
        "ITEM_SER": 131,
        "ITEM_ID": "6505-99-02-12331",
        "DRUG_NAME": "TeiCOPLANIN 200mg (Targocid) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 10 Shelf B"
    },
    {
        "ITEM_SER": 5053,
        "ITEM_ID": "6505-99-02-02201",
        "DRUG_NAME": "TeripaRATIDE 20mcg/80mcg (Forteo) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 6 Shelf C"
    },
    {
        "ITEM_SER": 2145,
        "ITEM_ID": "6505-99-02-12222",
        "DRUG_NAME": "Terlippressin 1mg (Glypressin) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 2"
    },
    {
        "ITEM_SER": 132,
        "ITEM_ID": "6505-99-02-12371",
        "DRUG_NAME": "Testosteron 250mg Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 53 Shelf D"
    },
    {
        "ITEM_SER": 5169,
        "ITEM_ID": "6505-99-02-17101",
        "DRUG_NAME": "Testosterone Undecanoate (Nebido) IM Injection",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf D"
    },
    {
        "ITEM_SER": 470,
        "ITEM_ID": "6505-99-06-12431",
        "DRUG_NAME": "Tetanus Immunoglobulin Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 1 Shelf 3"
    },
    {
        "ITEM_SER": 1824,
        "ITEM_ID": "6505-99-06-01717",
        "DRUG_NAME": "Tetanus Toxoid Vaccine 0.5ML",
        "ITEM_PHYSICAL_LOCATION": "Fridge 1 Shelf 2"
    },
    {
        "ITEM_SER": 2258,
        "ITEM_ID": "6505-99-02-08190",
        "DRUG_NAME": "Thrombax 15mg/1ml (Recombitant Hirudin) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 128,
        "ITEM_ID": "6505-99-02-1216",
        "DRUG_NAME": "Throtrophin R.H. 0.2mg/2ml (Protirelin) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 2004,
        "ITEM_ID": "6505-99-02-02882",
        "DRUG_NAME": "TigeCYCLINE 50mg (Tygacil) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 9 Shelf C"
    },
    {
        "ITEM_SER": 2039,
        "ITEM_ID": "6505-99-02-12751",
        "DRUG_NAME": "Tirofiban 0.25mg/ml (Aggrastate) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 23 Shelf B"
    },
    {
        "ITEM_SER": 2047,
        "ITEM_ID": "6505-99-02-12614",
        "DRUG_NAME": "Tobramycin 80mg/2ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 9 Shelf C"
    },
    {
        "ITEM_SER": 5245,
        "ITEM_ID": "6505-99-02-00071",
        "DRUG_NAME": "Tocilizumab 162mg  (Actemra) S.C Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 2 Shelf D"
    },
    {
        "ITEM_SER": 2282,
        "ITEM_ID": "6505-99-02-06631",
        "DRUG_NAME": "Tocilizumab 200mg/10ml  (Actemra) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 2 Shelf C"
    },
    {
        "ITEM_SER": 2283,
        "ITEM_ID": "6505-99-02-06651",
        "DRUG_NAME": "Tocilizumab 400mg/20ml (Actemra) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 2 Shelf D"
    },
    {
        "ITEM_SER": 347,
        "ITEM_ID": "6505-99-02-00224",
        "DRUG_NAME": "Trace Elements Adults (Addamel) Infusion Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 38 Shelf A"
    },
    {
        "ITEM_SER": 2249,
        "ITEM_ID": "6505-99-02-08933",
        "DRUG_NAME": "Trace Elements Pediatrics (Pediatrace) Infusion Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 39 Shelf C"
    },
    {
        "ITEM_SER": 2241,
        "ITEM_ID": "6505-99-02-12795",
        "DRUG_NAME": "Tranexamic Acid 500mg/5ml (Cyklokapron) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 23 Shelf A"
    },
    {
        "ITEM_SER": 35,
        "ITEM_ID": "6505-99-02-06732",
        "DRUG_NAME": "Triamcinolone Acetonide 40mg/ml (Kenacort-A) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 23 Shelf C"
    },
    {
        "ITEM_SER": 34,
        "ITEM_ID": "6505-99-02-06721",
        "DRUG_NAME": "Triamicinolone 10mg (Kenalog) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 23 Shelf C"
    },
    {
        "ITEM_SER": 2260,
        "ITEM_ID": "6505-99-02-12697",
        "DRUG_NAME": "Tridil 5000 (GTN) Set",
        "ITEM_PHYSICAL_LOCATION": "Column 15 Shelf A"
    },
    {
        "ITEM_SER": 5650,
        "ITEM_ID": "6505-99-02-03213",
        "DRUG_NAME": "TriptORELIN Acetate 0.1mg (Decapeptyl) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 5 Shelf B"
    },
    {
        "ITEM_SER": 5167,
        "ITEM_ID": "6505-99-02-25011",
        "DRUG_NAME": "Triptorelin 11.25mg (Diphereline)  Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf E"
    },
    {
        "ITEM_SER": 17631,
        "ITEM_ID": "6505-99-03-07381",
        "DRUG_NAME": "Triptorelin Embonate 22.5mg (Diphereline) Vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 471,
        "ITEM_ID": "6505-99-06-13102",
        "DRUG_NAME": "Tuberculin Test (PPD) vial",
        "ITEM_PHYSICAL_LOCATION": "Fridge 1 Shelf 4"
    },
    {
        "ITEM_SER": 2248,
        "ITEM_ID": "6505-99-03-13291",
        "DRUG_NAME": "Uromitexan 400mg/4ml (Mesna) IV / IM / Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 38 Shelf A"
    },
    {
        "ITEM_SER": 5746,
        "ITEM_ID": "6505-99-02-29090",
        "DRUG_NAME": "Ustekinumab 130mg (Stelara) Vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5322,
        "ITEM_ID": "6505-99-02-04611",
        "DRUG_NAME": "Ustekinumab 45mg (Stelara) PF Syring",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5059,
        "ITEM_ID": "6505-99-02-04621",
        "DRUG_NAME": "Ustekinumab 90mg (Stelara) PF Syring",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 2236,
        "ITEM_ID": "6505-99-02-11662",
        "DRUG_NAME": "Valproic Acid 400mg (Depakin) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 53 Shelf C"
    },
    {
        "ITEM_SER": 143,
        "ITEM_ID": "6505-99-02-13372",
        "DRUG_NAME": "Vancomycin 500mg Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 10 Shelf C"
    },
    {
        "ITEM_SER": 2264,
        "ITEM_ID": "6505-99-06-13421",
        "DRUG_NAME": "Varicella Zoster imm.glob.",
        "ITEM_PHYSICAL_LOCATION": "Fridge 1 Shelf 4"
    },
    {
        "ITEM_SER": 2263,
        "ITEM_ID": "6505-99-02-03153",
        "DRUG_NAME": "Vasopressin 20 Unit Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 4 Shelf 3"
    },
    {
        "ITEM_SER": 5474,
        "ITEM_ID": "6505-99-02-06621",
        "DRUG_NAME": "Vedolizumab 300mg (Entyvio) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 145,
        "ITEM_ID": "6505-99-02-13602",
        "DRUG_NAME": "Verapamil 5mg/2ml (Isoptin) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 24 Shelf A"
    },
    {
        "ITEM_SER": 5436,
        "ITEM_ID": "6505-99-02-13682",
        "DRUG_NAME": "Vitalipid Infant Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 36 Shelf A"
    },
    {
        "ITEM_SER": 149,
        "ITEM_ID": "6505-99-02-08412A",
        "DRUG_NAME": "Vitamin (B1 100mg,B6 100mg,B12 1mg) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 4"
    },
    {
        "ITEM_SER": 150,
        "ITEM_ID": "6505-99-02-13782",
        "DRUG_NAME": "Vitamin B1 100mg/2ml (Thiamine) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 38 Shelf B"
    },
    {
        "ITEM_SER": 151,
        "ITEM_ID": "6505-99-02-13811",
        "DRUG_NAME": "Vitamin B12 (CyanoCObalamine) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 38 Shelf C"
    },
    {
        "ITEM_SER": 5865,
        "ITEM_ID": "6505-99-02-13823",
        "DRUG_NAME": "Vitamin B12 Depot. 1mg/ml im/iv (HydroxyCObalamine) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 37 Shelf A"
    },
    {
        "ITEM_SER": 5362,
        "ITEM_ID": "6505-99-02-13762",
        "DRUG_NAME": "Vitamin C (Ascorbic acid) 500mg/5ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 38 Shelf B"
    },
    {
        "ITEM_SER": 2268,
        "ITEM_ID": "6505-99-02-13694",
        "DRUG_NAME": "Vitamin D3 600'000 IU Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 38 Shelf B"
    },
    {
        "ITEM_SER": 152,
        "ITEM_ID": "6505-99-02-13936",
        "DRUG_NAME": "Vitamin E Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 37 Shelf A"
    },
    {
        "ITEM_SER": 154,
        "ITEM_ID": "6505-99-02-13963",
        "DRUG_NAME": "Vitamin K 10mg  (Phytomenadione) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 37 Shelf A"
    },
    {
        "ITEM_SER": 153,
        "ITEM_ID": "6505-99-02-13953",
        "DRUG_NAME": "Vitamin K 2mg (Phytomenadione) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 37 Shelf B"
    },
    {
        "ITEM_SER": 2265,
        "ITEM_ID": "6505-99-02-13875",
        "DRUG_NAME": "Vitamin Pyridoxine HCl 100mg/2ml (vit.B6) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 36 Shelf A"
    },
    {
        "ITEM_SER": 2278,
        "ITEM_ID": "6505-99-02-04881",
        "DRUG_NAME": "VoriCONAZOle 200mg ( VFEND) injection",
        "ITEM_PHYSICAL_LOCATION": "Column 53 Shelf F"
    },
    {
        "ITEM_SER": 17848,
        "ITEM_ID": "6505-99-02-44441",
        "DRUG_NAME": "Vosoritide 0.4mg (Voxzogo) Vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 169,
        "ITEM_ID": "6505-99-02-20805",
        "DRUG_NAME": "Water For Injection 5ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 35 Shelf A"
    },
    {
        "ITEM_SER": 1550,
        "ITEM_ID": "6505-99-02-11702",
        "DRUG_NAME": "Water soluble Vitamines (Soluvit) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 36 Shelf B"
    },
    {
        "ITEM_SER": 5361,
        "ITEM_ID": "6505-99-02-04921",
        "DRUG_NAME": "Wilfactin 1000 IU (VWF) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf E"
    },
    {
        "ITEM_SER": 6297,
        "ITEM_ID": "6505-99-02-00481",
        "DRUG_NAME": "Xultophy  (Insulin Degludec 300IU/Liraglutide 3.6MG) Pen",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 3"
    },
    {
        "ITEM_SER": 5637,
        "ITEM_ID": "6505-99-02-05700",
        "DRUG_NAME": "Xyntha   1000  IU  Vial",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5234,
        "ITEM_ID": "6505-99-02-05600",
        "DRUG_NAME": "Xyntha 500 IU (Recomb-Antiheamophilic Factor) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5888,
        "ITEM_ID": "6505-99-02-11541",
        "DRUG_NAME": "Zavicefta (CEftazidime 2gm/Avibactam 0.5gm) IV Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 10 Shelf D"
    },
    {
        "ITEM_SER": 5759,
        "ITEM_ID": "6505-99-02-02841",
        "DRUG_NAME": "Zerbaxa (Ceftolozane 1g/Tazobactam 0.5g) IV Infusion",
        "ITEM_PHYSICAL_LOCATION": "Fridge 2 Shelf 2"
    },
    {
        "ITEM_SER": 2284,
        "ITEM_ID": "6505-99-02-02241",
        "DRUG_NAME": "Zoledronic Acid 0.05mg/ml 100ml (Aclasta) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 53 Shelf H"
    },
    {
        "ITEM_SER": 5749,
        "ITEM_ID": "6505-99-02-20031",
        "DRUG_NAME": "adrenALIN 1mg/10ml (1/10,000)  Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Column 20 Shelf C"
    },
    {
        "ITEM_SER": 165,
        "ITEM_ID": "6505-99-02-20043",
        "DRUG_NAME": "adrenALINE 1mg/ml (1:1000) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 20 Shelf B"
    },
    {
        "ITEM_SER": 5845,
        "ITEM_ID": "6505-99-02-11221",
        "DRUG_NAME": "cefTaROline fosamil 600mg (zinforo) IV Infusion",
        "ITEM_PHYSICAL_LOCATION": "Column 2 Shelf C"
    },
    {
        "ITEM_SER": 5099,
        "ITEM_ID": "6505-99-02-06442",
        "DRUG_NAME": "certoLIZUMAB 200MG (Cimzia) Prefilled Syring",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 1 Shelf C"
    },
    {
        "ITEM_SER": 5242,
        "ITEM_ID": "6505-99-02-06583",
        "DRUG_NAME": "cetroRELIX 0.25mg (Cetrotide) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 5 Shelf 4"
    },
    {
        "ITEM_SER": 5446,
        "ITEM_ID": "6505-99-02-14271",
        "DRUG_NAME": "colaginase colistridium (xiapex-xiaflex) Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 5789,
        "ITEM_ID": "6505-99-02-02941",
        "DRUG_NAME": "colistimethate 150mg Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 6 Shelf A"
    },
    {
        "ITEM_SER": 388,
        "ITEM_ID": "6505-99-02-03402",
        "DRUG_NAME": "desFERROxamine 0.5gm (Desferal) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf B"
    },
    {
        "ITEM_SER": 384,
        "ITEM_ID": "6505-99-02-03132",
        "DRUG_NAME": "desMOPREssin 4mcg/ml (Minirin) Injection",
        "ITEM_PHYSICAL_LOCATION": "Fridge 3 Shelf 2"
    },
    {
        "ITEM_SER": 5428,
        "ITEM_ID": "6505-99-02-03483",
        "DRUG_NAME": "dexmeDETOmidin200mcg/2ml (Precedex) Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 33 Shelf B"
    },
    {
        "ITEM_SER": 2243,
        "ITEM_ID": "6505-99-02-20384",
        "DRUG_NAME": "glycopyrrolate 200mcg/ml Injection",
        "ITEM_PHYSICAL_LOCATION": "Column 32 Shelf B"
    },
    {
        "ITEM_SER": 5114,
        "ITEM_ID": "6505-99-02-04041",
        "DRUG_NAME": "laCOSamide 200mg/20ml (Vimpat) Injection",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 2 Shelf D"
    },
    {
        "ITEM_SER": 5339,
        "ITEM_ID": "6505-99-02-06281",
        "DRUG_NAME": "liraglutide 6mg/ml 3ml (victoza)  Pen",
        "ITEM_PHYSICAL_LOCATION": "Cold Room 7 Shelf B"
    },
    {
        "ITEM_SER": 6225,
        "ITEM_ID": "6505-99-02-12441",
        "DRUG_NAME": "sotrovimab 500mg",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 2246,
        "ITEM_ID": "6505-99-02-03984",
        "DRUG_NAME": "tromeTAMOL 30mg/ml (Ketrolac) Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Column 46 Shelf B"
    },
    {
        "ITEM_SER": 5826,
        "ITEM_ID": "6505-99-06-13411",
        "DRUG_NAME": "varicella vaccine",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 6236,
        "ITEM_ID": "6505-9902-13740B",
        "DRUG_NAME": "vitamin (B1 250mg,B6 250mg,B12 1.5mg)Injection",
        "ITEM_PHYSICAL_LOCATION": ""
    },
    {
        "ITEM_SER": 9999,
        "ITEM_ID": "6505-99-02-13382",
        "DRUG_NAME": "Sodium Glycerophosphate (Na 2mmol - PO4 1mmol)/ml, 20ml Ampoule",
        "ITEM_PHYSICAL_LOCATION": "Cupboard 5 Shelf A"
    }
];
// Function to render rows
function renderRows(filteredData) {
    const results = document.getElementById('results');
    results.innerHTML = ''; // Clear previous rows

    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                        <td>${item.DRUG_NAME}</td>
                        <td>${item.ITEM_PHYSICAL_LOCATION}</td>
                    `;
            results.appendChild(row);
        });
    } else {
        const noResults = document.createElement('tr');
        noResults.innerHTML = `<td colspan="4" class="no-results">No matching results found.</td>`;
        results.appendChild(noResults);
    }
}

// Function to perform the search
function search() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    const filteredData = data.filter(item =>
        item.ITEM_ID.toLowerCase().includes(query) ||
        item.DRUG_NAME.toLowerCase().includes(query) ||
        item.ITEM_PHYSICAL_LOCATION.toLowerCase().includes(query)
    );

    renderRows(filteredData);
}

// Initial render
renderRows(data);