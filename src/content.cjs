// Source-reviewed V25 verified content map (medical-college brochure). Draft dental and nursing details are not represented as verified.
const institution={
 id:'group',name:'SVS Group of Institutions',short:'SVS Group',type:'group',eyebrow:'ONE LEGACY · FIVE DISTINCT EXPERIENCES',
 headline:'Learning, healing, and serving — together.',subheading:'Five pathways. One shared commitment to education and compassionate care.',
 description:'Sri Venkata Sai Educational Society traces its establishment to 1997. This central portal introduces the SVS institutional family, programmes, facilities, leadership and the individual educational and clinical websites.',
 image:'svs-campus-video-poster.jpg',video:'svs-campus-aerial.mp4',accent:'#0066a6',icon:'layers',
 metrics:[['1997','Society established'],['1999','Medical college established'],['5','Specialist destinations']],
 about:[
  'Established in 1997, Sri Venkata Sai Educational Society set out to improve educational and healthcare access for communities in and around Mahabubnagar.',
  'The institutional vision brings professional education, teaching facilities, healthcare services and community engagement into one connected ecosystem.',
  'This group-level website serves as the starting point for visitors who need to understand the history, leadership, facilities, programmes, and relationship between individual SVS institutions.'
 ],
 programmes:[
  ['MBBS','Medical college','Medical undergraduate programme documented in the SVSMC brochure.','medicalcollege','verified'],
  ['MD/MS','Medical college','Postgraduate broad-specialty programmes documented from 2005 onward. Individual specializations require current confirmation.','medicalcollege','verified'],
  ['Dental programmes','Dental college','Course titles, seat intake, recognition and admission instructions require official dental-college documentation.','dentalcollege','pending'],
  ['Nursing programmes','Nursing college','Specific nursing degrees, intake and approvals require official nursing-college documentation.','nursingcollege','pending']
 ],
 departments:[['Medical College','Undergraduate and postgraduate clinical education','medicalcollege'],['Medical Hospital','Clinical care, specialties and diagnostics','medicalhospital'],['Dental College','Dental education website and academic information','dentalcollege'],['Dental Hospital','Patient-facing dental service information','dentalhospital'],['Nursing College','Nursing education and training information','nursingcollege']],
 facilities:[['Learning spaces','Lecture theatres, teaching laboratories and simulation training'],['Central library','Study resources, book and journal collections, digital access'],['Teaching hospital','Emergency, clinical departments and diagnostic services'],['Campus life','Hostel, dining, indoor and outdoor recreation facilities'],['Student welfare','Mentorship and institutional committees'],['Community outreach','Rural and urban healthcare training centres']],
 leadership:[['Prof. A. Kanakaraj','Chairman, SVS Educational Society'],['Dr. K. Krishna Reddy','Secretary, SVS Educational Society'],['Dr. K. J. Reddy','Managing Director, SVS Group of Institutions']],
 quote:'Education and care are strongest when they grow together.'
};
const medicalcollege={
 id:'medicalcollege',name:'SVS Medical College',short:'Medical College',type:'college',eyebrow:'MEDICAL EDUCATION · YENUGONDA',
 headline:'Where knowledge becomes clinical confidence.',subheading:'Foundations in science. Learning grounded in compassionate practice.',
 description:'SVS Medical College was established in 1999. The brochure documents its MBBS course, postgraduate MD/MS education, clinical training, a skills laboratory, a central library and campus infrastructure.',
 image:'svs-medical-college.webp',accent:'#006a9c',icon:'graduation-cap',
 metrics:[['1999','Established'],['MBBS','Undergraduate course'],['MD/MS','Postgraduate courses']],
 about:['SVS Medical College began in 1999, following the establishment of Sri Venkata Sai Educational Society in 1997.','The supplied prospectus states that the college is affiliated to Kaloji Narayana Rao University of Health Sciences (KNRUHS), Warangal, and approved by the National Medical Commission (NMC). These statuses should be verified before public launch.','Its teaching model combines classroom knowledge, laboratory practice, supervised clinical exposure and a competency-based curriculum.'],
 programmes:[
  ['MBBS','Undergraduate medical degree','Established in 1999. The brochure records recognition of 150 MBBS seats in February 2018; current approved intake must be confirmed.','medicalcollege','verified'],
  ['MD/MS','Postgraduate medical programmes','Multiple broad specialties developed from 2005 onwards. The brochure mentions 148 postgraduate seats, subject to current approval.','medicalcollege','verified'],
  ['Competency-Based Medical Education','Curriculum approach','Foundation, pre-clinical, para-clinical and clinical phases with early clinical exposure, electives and AETCOM.','medicalcollege','verified'],
  ['Family Adoption Programme','Community learning','Structured community-oriented field visits and supervised family health engagement.','medicalcollege','verified']
 ],
 departments:[['Pre-clinical subjects','Anatomy, Physiology, Biochemistry','medicalcollege'],['Para-clinical subjects','Pathology, Microbiology, Pharmacology, Forensic Medicine','medicalcollege'],['Clinical specialties','Medicine, Surgery, Obstetrics & Gynaecology, Paediatrics and others','medicalcollege']],
 facilities:[['ICT-enabled lecture theatres','College and hospital teaching blocks'],['Skills laboratory','High-fidelity mannequins and procedural simulation'],['Practical laboratories','Histology, physiology, biochemistry, microbiology and related labs'],['Central library','Undergraduate, postgraduate and faculty study areas'],['Campus accommodation','Hostels, dining and student common areas'],['Clinical exposure','Supervised clinical postings at the teaching hospital']],
 leadership:[['Dr. Krishna Prakash Joshi','Principal, SVS Medical College & Hospital'],['Dr. Rohit Dixit','Vice-Principal (Academics)'],['Dr. Asiya Naaz','Vice-Principal (Academics)']],
 quote:'Learning from practice, guided by responsibility.'
};
const medicalhospital={
 id:'medicalhospital',name:'SVS Medical College Hospital',short:'Medical Hospital',type:'hospital',eyebrow:'HEALTHCARE · TEACHING HOSPITAL',
 headline:'Care rooted in experience, delivered with compassion.',subheading:'Clinical services, teaching and community health in one setting.',
 description:'The medical-college brochure describes a teaching hospital with outpatient and inpatient services, emergency and critical care, operating suites, diagnostic facilities and community health programmes.',
 image:'svs-hospital-building.webp',accent:'#006e80',icon:'heart-pulse',
 metrics:[['24×7','Emergency services (brochure)'],['23','Operating suites (brochure)'],['Clinical','Teaching environment']],
 about:['SVS Medical College Hospital supports patient care and clinical education as part of the integrated Yenugonda campus.','The supplied prospectus describes a tertiary-care teaching environment spanning emergency care, diagnostic departments, operating theatres, critical-care units and multidisciplinary specialties.','Detailed service availability, clinical schedules, operating hours and patient pathways should be approved by the hospital administration before public release.'],
 programmes:[['Outpatient care','Patient services','Clinical consultations and outpatient pathways described in the brochure.','medicalhospital','verified'],['Emergency & critical care','Patient services','Emergency/casualty, critical-care units and associated clinical support are listed.','medicalhospital','verified'],['Diagnostics','Patient services','Radiology, laboratory, blood bank and specialty diagnostics are described.','medicalhospital','verified'],['Community outreach','Community health','Rural and Urban Health Training Centres are included in the prospectus.','medicalhospital','verified']],
 departments:[['General Medicine','Physician-led medical care and clinical teaching','medicalhospital'],['General Surgery','Surgical care and supervised training','medicalhospital'],['Obstetrics & Gynaecology','Maternal and women’s health services','medicalhospital'],['Paediatrics','Child health and paediatric care','medicalhospital'],['Orthopaedics','Bone, joint and musculoskeletal care','medicalhospital'],['Cardiology','Cardiac diagnostic and intervention infrastructure described','medicalhospital'],['Neurology / Neurosurgery','Clinical specialties named in the prospectus','medicalhospital'],['Radiodiagnosis','MRI, CT and ultrasound facilities described','medicalhospital']],
 facilities:[['Emergency & casualty','Emergency care and triage infrastructure'],['Intensive-care units','MICU, SICU, NICU, PICU and other specialist care areas described'],['Operating theatres','Major and minor operating suites'],['Radiodiagnosis','MRI, CT, ultrasound and related imaging'],['Blood bank & laboratory','Laboratory testing and transfusion support'],['Community care','Rural and urban training centres']],
 leadership:[['Dr. Hari Prasad Basireddy','Medical Superintendent'],['Mr. R. Prasanna Venkatesh','Hospital Administrator']],
 quote:'A teaching hospital where clinical skill and human dignity meet.'
};
const dentalcollege={
 id:'dentalcollege',name:'SVS Dental College',short:'Dental College',type:'college',eyebrow:'DENTAL EDUCATION · INSTITUTIONAL SITE',
 headline:'A dedicated home for dental education.',subheading:'A clear academic experience, ready for official programme details.',
 description:'This dedicated SVS dental-college website is being prepared as part of the five-site institution ecosystem. Programme and approval details were not provided in the medical-college brochure.',
 image:'svs-biochemistry-lab.webp',accent:'#5e55ac',icon:'smile',review:true,
 metrics:[['SVS','Institutional group'],['Academic','Information portal'],['Dental','Education focus']],
 about:['The dental-college website will provide a separate academic identity within the SVS group, with its own programmes, faculty information, academic departments and student facilities.','The supplied SVSMC brochure does not confirm the dental college’s founding year, affiliation, recognition, annual intake or course offerings. Those details must be sourced from the dental college before publication.'],
 programmes:[['Dental degree programmes','Awaiting official curriculum','The exact degrees, programmes and intake will be entered after the college provides its approved prospectus.','dentalcollege','pending'],['Admissions','Awaiting official policy','Admissions pathways, eligibility, counselling and fee schedules require confirmation.','dentalcollege','pending']],
 departments:[['Academic departments','Department names and HOD details to be supplied','dentalcollege'],['Clinical training','Training facilities and clinical unit details to be supplied','dentalcollege']],
 facilities:[['Teaching environment','Official laboratory and lecture-hall information required'],['Clinical training','Facilities subject to institutional confirmation'],['Library','Library catalogue and access hours to be supplied'],['Student support','Student services and welfare details to be supplied']],
 leadership:[],quote:'A focused educational experience, shaped by verified institutional information.'
};
const dentalhospital={
 id:'dentalhospital',name:'SVS Dental Hospital',short:'Dental Hospital',type:'hospital',eyebrow:'DENTAL CARE · CLINICAL SITE',
 headline:'A clearer path to dental care.',subheading:'An independent patient-facing dental hospital experience.',
 description:'The SVS dental hospital will have its own website for clinical departments, patient information, services, doctor directory and contact channels. Verified operational details are still required.',
 image:'svs-hospital-community.webp',accent:'#2c8d83',icon:'activity',review:true,
 metrics:[['SVS','Institutional group'],['Patient','Information portal'],['Dental','Clinical focus']],
 about:['SVS requires a standalone patient-facing dental hospital website separate from the dental college.','The provided medical-college brochure does not confirm dental hospital services, operating hours, clinicians or emergency arrangements, so no unsupported clinical claims are published in this preview.'],
 programmes:[['Dental care pathways','Awaiting official service list','Clinical services and consultation pathways will be published after sign-off.','dentalhospital','pending'],['Patient information','Awaiting approved policies','Visiting hours, appointments and contact channels require confirmation.','dentalhospital','pending']],
 departments:[['Dental specialties','Exact approved specialties to be supplied','dentalhospital'],['Doctor directory','Verified clinical roster and qualifications required','dentalhospital']],
 facilities:[['Clinical spaces','Official clinical photographs and operating details required'],['Diagnostic services','Published only once confirmed'],['Patient assistance','Reception and patient enquiry information required'],['Accessibility','Facilities and support details pending']],
 leadership:[],quote:'Clear, reliable information helps every patient make better decisions.'
};
const nursingcollege={
 id:'nursingcollege',name:'SVS Nursing College',short:'Nursing College',type:'college',eyebrow:'NURSING EDUCATION · INSTITUTIONAL SITE',
 headline:'Education shaped by care.',subheading:'Classroom knowledge, clinical learning and professional values.',
 description:'The nursing-college site has dedicated space for courses, training, academic departments, student life and admissions. The brochure does not give confirmed nursing programme details.',
 image:'svs-nursing-classroom.webp',accent:'#ad5c86',icon:'hand-heart',review:true,
 metrics:[['SVS','Institutional group'],['Campus','Classroom images'],['Nursing','Education focus']],
 about:['This standalone nursing website supports the SVS plan to provide each institution with a separate online identity.','The supplied SVSMC medical-college prospectus contains no sufficient nursing-specific programme list, affiliation or seat approval details, and these will be incorporated only after institutional verification.'],
 programmes:[['Nursing programmes','Awaiting official prospectus','Degree and diploma titles, durations, eligibility, fees and sanctioned intakes are to be confirmed.','nursingcollege','pending'],['Clinical training','Awaiting official arrangements','Training placements, facilities and curricular pathways require confirmation.','nursingcollege','pending']],
 departments:[['Academic departments','Course and faculty departments to be confirmed','nursingcollege'],['Practical training','Skills and clinical placement details to be supplied','nursingcollege']],
 facilities:[['Practical learning','Photo assets available; facility details require confirmation'],['Classroom learning','Nursing teaching environments'],['Student life','Campus and accommodation information to be confirmed'],['Student support','Official support and grievance contacts required']],
 leadership:[],quote:'Knowledge, empathy, and clinical discipline belong together.'
};
const sites=[institution,medicalcollege,medicalhospital,dentalcollege,dentalhospital,nursingcollege];
module.exports={sites,byId:Object.fromEntries(sites.map(s=>[s.id,s]))};
