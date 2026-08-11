const WEB_APP_URL="https://script.google.com/macros/s/AKfycbwu52Wq9KXt-O1xswSrubKUHQRDLfNN0NmwmgpchkRBiv5wAnHT3HT-_r8_IIJNTRslTA/exec";
const CLASSIFICATIONS_URL = WEB_APP_URL + (WEB_APP_URL.indexOf('?')>=0 ? '&' : '?') + 'type=classifications';
const MASTER_SHEET_ID = '10dP7KWmgaQ1D8BqVKmyHSMFb_BUyXZXpF9yDJbPwpXg';
const DEFAULT_CLASSIFICATIONS=[
{category:'PR',code:'PR.01.01',description:'Rencana pembangunan jangka panjang'},{category:'PR',code:'PR.01.02',description:'Rencana pembangunan jangka menengah'},{category:'PR',code:'PR.01.03',description:'Rencana strategis kementerian'},{category:'PR',code:'PR.01.04',description:'Rencana strategis satuan kerja'},{category:'PR',code:'PR.01.06',description:'Rencana kerja'},{category:'PR',code:'PR.01.07',description:'Rencana kerja dan anggaran'},{category:'PR',code:'PR.04.02',description:'Laporan Tahunan'},
{category:'KU',code:'KU.01.01',description:'Pedoman, Petunjuk, dan Administrasi Pelaksanaan Anggaran'},{category:'KU',code:'KU.01.02',description:'Daftar Isian Pelaksanaan Anggaran (DIPA)'},{category:'KU',code:'KU.01.03',description:'Penerimaan Negara Bukan Pajak (PNBP)'},{category:'KU',code:'KU.03.01',description:'Pertanggungjawaban Belanja'},{category:'KU',code:'KU.04.01',description:'Laporan Keuangan'},
{category:'OT',code:'OT.01.03',description:'Organisasi dan Tata Kerja Unit Pelaksana Teknis'},{category:'OT',code:'OT.02.02',description:'Sistem, Prosedur, dan Metode Kerja'},{category:'OT',code:'OT.03.02',description:'Zona Integritas'},
{category:'SA',code:'SA.01.01',description:'Inventarisasi Jabatan / Peta Jabatan'},{category:'SA',code:'SA.03.03',description:'Pengangkatan Jabatan Struktural'},{category:'SA',code:'SA.03.04',description:'Pengangkatan Jabatan Fungsional'},{category:'SA',code:'SA.04.05',description:'Kenaikan Pangkat / Golongan'},{category:'SA',code:'SA.05.02',description:'Pembinaan Disiplin dan Kode Etik'},{category:'SA',code:'SA.09.04',description:'Cuti Pegawai'},
{category:'PB',code:'PB.01.01',description:'Usulan Rencana Kebutuhan BMN'},{category:'PB',code:'PB.03.01',description:'Penggunaan BMN'},{category:'PB',code:'PB.03.03',description:'Pemanfaatan BMN'},
{category:'KS',code:'KS.01.02',description:'Lembaga Pemerintah'},{category:'KS',code:'KS.02.01',description:'Kesepakatan / Nota Kesepakatan / MoU / PKS Dalam Negeri'},
{category:'HK',code:'HK.01.01',description:'Penyusunan Rencana Pembentukan Peraturan Perundang-undangan'},{category:'HK',code:'HK.02.01',description:'Advokasi Hukum Litigasi'},{category:'HK',code:'HK.02.02',description:'Advokasi Hukum Nonlitigasi'},{category:'HK',code:'HK.02.07',description:'Telaah Hukum'},
{category:'UM',code:'UM.01.01',description:'Penciptaan Arsip & Ketatausahaan'},{category:'UM',code:'UM.02.03',description:'Kendaraan Dinas'},{category:'UM',code:'UM.02.07',description:'Perjalanan Dinas'},{category:'UM',code:'UM.03.01',description:'Upacara Nasional & Keprotokolan'},{category:'UM',code:'UM.04.03',description:'Dokumen Rahasia & Pengamanan'},
{category:'PW',code:'PW.02.01',description:'Audit Kinerja'},{category:'PW',code:'PW.04.01',description:'Tindak Lanjut Kinerja / Temuan'},{category:'PW',code:'PW.06.01',description:'Whistle Blowing System'},
{category:'TI',code:'TI.01.03',description:'Pengembangan Aplikasi & Srikandi'},{category:'TI',code:'TI.07.03',description:'PPID & Informasi Publik'},
{category:'PK',code:'PK.01.01',description:'Perumusan Kebijakan dan Standardisasi Pemasyarakatan'},{category:'PK',code:'PK.02.01',description:'Pelayanan Pemasyarakatan - Registrasi Tahanan & Narapidana'},{category:'PK',code:'PK.03.02',description:'Program Asesmen Dan Klasifikasi'},{category:'PK',code:'PK.04.02',description:'Mutasi Narapidana & Anak Binaan'},{category:'PK',code:'PK.05.01',description:'Bimbingan Kemasyarakatan dan Pengentasan Anak - Kepribadian'},{category:'PK',code:'PK.05.02',description:'Bimbingan Kemasyarakatan dan Pengentasan Anak - Kemandirian'},{category:'PK',code:'PK.06.01',description:'Pembinaan Narapidana Dan Anak Binaan - Kepribadian'},{category:'PK',code:'PK.06.03',description:'Asimilasi & Integrasi Narapidana'},{category:'PK',code:'PK.07.01',description:'Pembimbingan Kemasyarakatan - Litmas (Penelitian Kemasyarakatan)'},{category:'PK',code:'PK.07.02',description:'Pendampingan & Keadilan Restoratif (Diversi Anak)'},{category:'PK',code:'PK.07.03',description:'Pembimbingan Klien & Pengawasan (PB, CB, CMB)'},{category:'PK',code:'PK.08.01',description:'Perawatan Kesehatan Dasar Narapidana/Klien'},{category:'PK',code:'PK.09.01',description:'Pengamanan dan Intelijen Pemasyarakatan'},
{category:'GR',code:'GR.02.01',description:'Paspor / Dokumen Perjalanan Republik Indonesia (DPRI)'},{category:'GR',code:'GR.03.01',description:'Izin Tinggal Kunjungan'},{category:'GR',code:'GR.04.01',description:'Pengawasan dan Penindakan Keimigrasian - Penyelidikan'},
{category:'SM',code:'SM.01.01',description:'Standar dan Program Pengembangan Kompetensi SDM Imipas'},{category:'PS',code:'PS.01.02',description:'Kajian Kebijakan / Policy Paper / Brief / Memo'}
];
let classifications=[],letterLogs=[],tertiaryCounters={},settings={uptPrefix:'WP.6.PAS22',numberFormat:'pad4'},favoriteCodes=[],statCurrentPeriod='monthly';
let agendaCurrentPage=1,agendaPageSize=25,agendaFilteredCache=[];
function formatNomorSurat(n,len=4){return(parseInt(n,10)||0).toString().padStart(len,'0')}
function getWIBDate(){return new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Jakarta'}))}
function getWIBDateString(){const w=getWIBDate();return`${w.getFullYear()}-${String(w.getMonth()+1).padStart(2,'0')}-${String(w.getDate()).padStart(2,'0')}`}
function getWIBTimeString(){const w=getWIBDate();return`${String(w.getHours()).padStart(2,'0')}:${String(w.getMinutes()).padStart(2,'0')}:${String(w.getSeconds()).padStart(2,'0')}`}
function getWIBFullTimestamp(){return`${getWIBDateString()} ${getWIBTimeString()} WIB`}
function startLiveWIBClock(){setInterval(()=>{const el=document.getElementById('liveClockDisplay');if(el)el.innerText=getWIBTimeString()},1000)}
document.addEventListener('DOMContentLoaded',()=>{
  if(localStorage.getItem('bapas_dark')==='1'||(!localStorage.getItem('bapas_dark')&&window.matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark');
  loadStateFromStorage();setTodayDateInForm();populateClassificationOptions();onExportPeriodTypeChange();updateExportPreview();updateNumberPreview();
  renderDashboardStats();renderAgendaTable();renderCounterGrid();renderRecentLetters();renderFavoriteCodes();
  setStatPeriod('monthly');startLiveWIBClock();fetchClassificationsFromSheets(true).then(function(){fetchDataFromGoogleSheets();});startAutoSync();updateRecipientSuggestions();
});
const AUTO_SYNC_INTERVAL_MS=15000;let autoSyncTimer=null,isSyncing=false;
function startAutoSync(){if(autoSyncTimer)clearInterval(autoSyncTimer);autoSyncTimer=setInterval(()=>{if(document.visibilityState==='visible'){fetchClassificationsFromSheets(true);fetchDataFromGoogleSheets(true);}},AUTO_SYNC_INTERVAL_MS)}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')fetchDataFromGoogleSheets(true)});
function loadStateFromStorage(){
  const sc=localStorage.getItem('bapas_classifications');classifications=sc?JSON.parse(sc):[...DEFAULT_CLASSIFICATIONS];if(!sc)localStorage.setItem('bapas_classifications',JSON.stringify(classifications));
  const sl=localStorage.getItem('bapas_letter_logs');letterLogs=sl?JSON.parse(sl):[];
  const ss=localStorage.getItem('bapas_settings');if(ss){settings=JSON.parse(ss);document.getElementById('settingNumberFormat').value=settings.numberFormat||'pad4'}
  const fav=localStorage.getItem('bapas_favorites');favoriteCodes=fav?JSON.parse(fav):[];
  recalculateTertiaryCounters();
}
function saveStateToStorage(){localStorage.setItem('bapas_classifications',JSON.stringify(classifications));localStorage.setItem('bapas_letter_logs',JSON.stringify(letterLogs));localStorage.setItem('bapas_settings',JSON.stringify(settings));localStorage.setItem('bapas_favorites',JSON.stringify(favoriteCodes))}
function recalculateTertiaryCounters(){tertiaryCounters={};classifications.forEach(i=>{tertiaryCounters[i.code]=0});letterLogs.forEach(l=>{if(!tertiaryCounters[l.tertiaryCode])tertiaryCounters[l.tertiaryCode]=0;if(l.counterNumber>tertiaryCounters[l.tertiaryCode])tertiaryCounters[l.tertiaryCode]=l.counterNumber})}
function getNextCounterForCode(code){return(tertiaryCounters[code]||0)+1}
function formatSequenceNumber(num){if(settings.numberFormat==='pad3')return formatNomorSurat(num,3);if(settings.numberFormat==='pad4')return formatNomorSurat(num,4);return String(num)}
function setTodayDateInForm(){document.getElementById('inputDate').value=getWIBDateString()}
function populateClassificationOptions(){
  const cat=document.getElementById('selectMainCategory').value,sel=document.getElementById('selectClassification'),filt=document.getElementById('filterCodeCategory');
  sel.innerHTML='';filt.innerHTML='<option value="ALL">— Semua Kode —</option>';
  const list=cat==='ALL'?classifications:classifications.filter(c=>c.category===cat);
  list.forEach(i=>{const o=document.createElement('option');o.value=i.code;o.innerText=`${i.code} — ${i.description}`;sel.appendChild(o)});
  classifications.forEach(i=>{const o=document.createElement('option');o.value=i.code;o.innerText=i.code;filt.appendChild(o)});
  const expSel=document.getElementById('exportCodeSelect');
  if(expSel){
    const cur=expSel.value||'ALL';
    expSel.innerHTML='<option value="ALL">— Semua Kode —</option>';
    classifications.forEach(i=>{
      const o=document.createElement('option');
      o.value=i.code;
      o.innerText=i.code+' — '+(i.description||'').substring(0,40);
      expSel.appendChild(o);
    });
    expSel.value=cur;
  }
  updateCodeDescription();
}
function filterClassificationCodes(){populateClassificationOptions();updateNumberPreview()}
function updateCodeDescription(){const code=document.getElementById('selectClassification').value,item=classifications.find(c=>c.code===code);if(item)document.getElementById('codeDescription').innerText=`Keterangan: ${item.description}`}
function updateNumberPreview(){updateCodeDescription();const code=document.getElementById('selectClassification').value||'UM.01.01',seq=formatSequenceNumber(getNextCounterForCode(code));document.getElementById('previewFullNumber').innerText=`${settings.uptPrefix}.${code}-${seq}`;document.getElementById('previewTertiaryCode').innerText=code;document.getElementById('previewCounterNumber').innerText=seq}
function applyTemplate(text){document.getElementById('inputSubject').value=text;document.getElementById('inputSubject').focus()}
async function saveLetter(){
  const code=document.getElementById('selectClassification').value;if(!code){showToast('Pilih kode klasifikasi','error');return}
  showToast('Menyinkronkan nomor…','info');await fetchDataFromGoogleSheets(true);
  const counterNum=getNextCounterForCode(code),formattedSeq=formatSequenceNumber(counterNum),fullNum=`${settings.uptPrefix}.${code}-${formattedSeq}`;
  const letterData={action:'create',id:'LTR-'+Date.now(),fullNumber:fullNum,uptPrefix:settings.uptPrefix,tertiaryCode:code,counterNumber:counterNum,formattedSequence:formattedSeq,date:document.getElementById('inputDate').value,sifat:document.getElementById('inputSifat').value,lampiran:document.getElementById('inputLampiran').value||'—',recipient:document.getElementById('inputRecipient').value,subject:document.getElementById('inputSubject').value,section:document.getElementById('inputSection').value,notes:document.getElementById('inputNotes').value||'—',timestamp:getWIBFullTimestamp()};
  showToast('Menyimpan…','info');letterLogs.unshift(letterData);recalculateTertiaryCounters();saveStateToStorage();
  updateNumberPreview();renderDashboardStats();renderAgendaTable();renderCounterGrid();renderRecentLetters();updateRecipientSuggestions();copyTextToClipboard(fullNum);playSuccessSound();
  try{await fetch(WEB_APP_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify(letterData)});showToast('Berhasil disimpan!');markSynced()}catch(e){showToast('Tersimpan lokal, gagal sinkron','error')}
}

async function fetchClassificationsFromSheets(silent){
  if(!WEB_APP_URL || WEB_APP_URL.indexOf('AKfycb...')>=0) return false;
  try{
    const res = await fetch(CLASSIFICATIONS_URL, { method:'GET', cache:'no-store' });
    const result = await res.json();
    if(result && result.result==='success' && Array.isArray(result.data)){
      const mapped = result.data
        .filter(r => r && (r.code || r.Kode))
        .map(r => ({
          category: String(r.category || r.Kategori || '').trim() || 'UM',
          code: String(r.code || r.Kode || '').trim().toUpperCase(),
          description: String(r.description || r.Deskripsi || '').trim()
        }))
        .filter(r => r.code);
      if(mapped.length){
        classifications = mapped;
        recalculateTertiaryCounters();
        saveStateToStorage();
        populateClassificationOptions();
        renderCounterGrid();
        renderDashboardStats();
        renderFavoriteCodes();
        if(typeof updateExportPreview==='function') updateExportPreview();
        if(!silent) showToast('Klasifikasi dimuat dari Master Sheet ('+mapped.length+' kode)');
        return true;
      }
    }
  }catch(err){
    console.log('Gagal muat klasifikasi dari Sheet:', err);
    if(!silent) showToast('Gagal muat Master Klasifikasi, pakai data lokal','error');
  }
  return false;
}

async function fetchDataFromGoogleSheets(silent=false){
  if(!WEB_APP_URL||WEB_APP_URL.includes('AKfycb...'))return;if(isSyncing)return;isSyncing=true;
  const icon=document.getElementById('syncBtnIcon');if(icon)icon.classList.add('fa-spin');
  try{
    const res=await fetch(WEB_APP_URL),result=await res.json();
    if(result.result==='success'&&result.data){
      const prevIds=new Set(letterLogs.map(l=>l.id)),prevCount=letterLogs.length;letterLogs=result.data.reverse();
      letterLogs.forEach(item=>{
        if(!item.tertiaryCode&&item.fullNumber){const prefix=settings.uptPrefix+'.';if(item.fullNumber.startsWith(prefix)){const rem=item.fullNumber.substring(prefix.length),dash=rem.lastIndexOf('-');if(dash!==-1){item.tertiaryCode=rem.substring(0,dash);item.counterNumber=parseInt(rem.substring(dash+1),10)||1}}}
        else if(typeof item.counterNumber==='string')item.counterNumber=parseInt(item.counterNumber,10)||0;
        if(!item.formattedSequence&&item.fullNumber){const dash=item.fullNumber.lastIndexOf('-');if(dash!==-1)item.formattedSequence=item.fullNumber.substring(dash+1)}
      });
      const hasNew=letterLogs.some(l=>!prevIds.has(l.id))||letterLogs.length!==prevCount;
      recalculateTertiaryCounters();saveStateToStorage();updateNumberPreview();renderDashboardStats();renderAgendaTable();renderCounterGrid();renderRecentLetters();updateRecipientSuggestions();markSynced();
      if(!silent)showToast('Data tersinkron dari Google Sheets');else if(hasNew)showToast('Data baru dari perangkat lain','info');
    }
  }catch(e){console.log('Offline/lokal:',e)}finally{isSyncing=false;if(icon)icon.classList.remove('fa-spin')}
}
function markSynced(){const el=document.getElementById('lastSyncLabel');if(el)el.innerText='Baru saja · '+getWIBTimeString()+' WIB';const ind=document.getElementById('syncIndicator');if(ind)ind.className='w-2 h-2 rounded-full bg-emerald-500 pulse-dot shrink-0'}
function resetForm(){document.getElementById('letterForm').reset();setTodayDateInForm();updateNumberPreview()}
function renderDashboardStats(){const today=getWIBDateString(),month=today.substring(0,7);document.getElementById('statToday').innerText=letterLogs.filter(l=>l.date===today).length;document.getElementById('statMonth').innerText=letterLogs.filter(l=>l.date&&l.date.startsWith(month)).length;document.getElementById('statCodes').innerText=classifications.length;renderStatistikTab();runGapDetection(true);if(typeof updateExportPreview==='function')updateExportPreview()}
function renderRecentLetters(){
  const list=document.getElementById('recentLettersList'),empty=document.getElementById('recentEmpty'),recent=letterLogs.slice(0,6);
  list.innerHTML='';if(!recent.length){empty.classList.remove('hidden');return}empty.classList.add('hidden');
  recent.forEach(log=>{const row=document.createElement('div');row.className='px-5 py-3.5 hover:bg-slate-50 dark:hover:bg-navy-800/50 transition cursor-pointer flex items-start gap-3';row.onclick=()=>previewLetterKop(log.id);
    row.innerHTML=`<div class="w-9 h-9 rounded-xl bg-bank-50 dark:bg-bank-950/40 text-bank-600 dark:text-bank-400 flex items-center justify-center shrink-0 text-xs"><i class="fa-solid fa-file-lines"></i></div><div class="min-w-0 flex-1"><div class="font-mono text-[11px] font-bold text-navy-900 dark:text-white truncate">${log.fullNumber}</div><div class="text-xs text-slate-500 truncate mt-0.5">${escapeHtml(log.subject)}</div><div class="text-[10px] text-slate-400 mt-0.5">${formatIndonesianDate(log.date)} · ${escapeHtml(log.recipient)}</div></div><span class="px-2 py-0.5 rounded text-[9px] font-semibold shrink-0 ${getSifatBadgeColor(log.sifat)}">${log.sifat}</span>`;
    list.appendChild(row)});
}
function renderAgendaTable(resetPage){
  if(resetPage) agendaCurrentPage=1;
  const tbody=document.getElementById('agendaTableBody'),empty=document.getElementById('emptyState');
  if(!tbody) return;
  const kw=(document.getElementById('searchKeyword')?.value||'').toLowerCase();
  const filterCode=document.getElementById('filterCodeCategory')?.value||'ALL';
  const dateFrom=document.getElementById('filterDateFrom')?.value||'';
  const dateTo=document.getElementById('filterDateTo')?.value||'';
  const pageSizeEl=document.getElementById('agendaPageSize');
  if(pageSizeEl){ const ps=parseInt(pageSizeEl.value,10); agendaPageSize=(ps>0?ps:25); } else if(!agendaPageSize||agendaPageSize<1){ agendaPageSize=25; }

  agendaFilteredCache=letterLogs.filter(log=>{
    const matchKw=(log.fullNumber||'').toLowerCase().includes(kw)||(log.recipient||'').toLowerCase().includes(kw)||(log.subject||'').toLowerCase().includes(kw);
    const matchCode=filterCode==='ALL'||log.tertiaryCode===filterCode;
    const matchFrom=!dateFrom||(log.date&&log.date>=dateFrom);
    const matchTo=!dateTo||(log.date&&log.date<=dateTo);
    return matchKw&&matchCode&&matchFrom&&matchTo;
  });

  const total=agendaFilteredCache.length;
  const totalPages=Math.max(1, Math.ceil(total/agendaPageSize));
  if(agendaCurrentPage>totalPages) agendaCurrentPage=totalPages;
  if(agendaCurrentPage<1) agendaCurrentPage=1;

  const startIdx=(agendaCurrentPage-1)*agendaPageSize;
  const pageLogs=agendaFilteredCache.slice(startIdx, startIdx+agendaPageSize);

  tbody.innerHTML='';
  const countEl=document.getElementById('agendaCount');
  if(countEl){
    if(total===0) countEl.innerText='Tidak ada data';
    else countEl.innerText=`Menampilkan ${startIdx+1}–${Math.min(startIdx+pageLogs.length,total)} dari ${total} surat`;
  }

  if(total===0){
    empty?.classList.remove('hidden');
    renderAgendaPagination(0, 0);
    return;
  }
  empty?.classList.add('hidden');

  pageLogs.forEach((log,i)=>{
    const rowNum=startIdx+i+1;
    const tr=document.createElement('tr');
    tr.className='hover:bg-slate-50 dark:hover:bg-navy-800/40 transition';
    tr.innerHTML=`<td class="p-3 text-center font-semibold text-slate-400 tabular-nums">${rowNum}</td>
      <td class="p-3 font-mono font-bold text-bank-700 dark:text-bank-400 whitespace-nowrap text-[11px]">${log.fullNumber||''}</td>
      <td class="p-3 whitespace-nowrap">${formatIndonesianDate(log.date)}</td>
      <td class="p-3 font-mono text-[10px] text-slate-500 whitespace-nowrap">${log.timestamp||'—'}</td>
      <td class="p-3 font-medium max-w-[130px] truncate" title="${escapeHtml(log.recipient)}">${escapeHtml(log.recipient)}</td>
      <td class="p-3 max-w-[150px] truncate" title="${escapeHtml(log.subject)}">${escapeHtml(log.subject)}</td>
      <td class="p-3"><span class="px-2 py-0.5 rounded text-[10px] font-semibold ${getSifatBadgeColor(log.sifat)}">${log.sifat||''}</span></td>
      <td class="p-3 text-slate-500 max-w-[90px] truncate">${escapeHtml(log.section)}</td>
      <td class="p-3 text-center whitespace-nowrap no-print">
        <button onclick="copyTextToClipboard('${(log.fullNumber||'').replace(/'/g,"\\'")}')" title="Salin" class="p-1.5 text-slate-400 hover:text-bank-600 transition"><i class="fa-solid fa-copy"></i></button>
        <button onclick="previewLetterKop('${log.id}')" title="Kop" class="p-1.5 text-slate-400 hover:text-blue-600 transition"><i class="fa-solid fa-file-lines"></i></button>
        <button onclick="duplicateLetter('${log.id}')" title="Duplikat" class="p-1.5 text-slate-400 hover:text-violet-600 transition"><i class="fa-solid fa-clone"></i></button>
        <button onclick="editLetter('${log.id}')" title="Edit" class="p-1.5 text-slate-400 hover:text-amber-600 transition"><i class="fa-solid fa-pen"></i></button>
        <button onclick="deleteLetter('${log.id}')" title="Hapus" class="p-1.5 text-slate-400 hover:text-red-600 transition"><i class="fa-solid fa-trash-can"></i></button>
      </td>`;
    tbody.appendChild(tr);
  });
  renderAgendaPagination(totalPages, total);
}

function renderAgendaPagination(totalPages, total){
  const box=document.getElementById('agendaPagination');
  if(!box) return;
  if(totalPages<=1){
    box.innerHTML = (total>0 && agendaPageSize>=total) ? '<span class="text-[11px] text-slate-400 px-2">1 halaman</span>' : '';
    return;
  }
  const btn=(label, page, disabled, active)=>`<button type="button" ${disabled?'disabled':''} onclick="goAgendaPage(${page})" class="min-w-[32px] h-8 px-2 rounded-lg text-xs font-semibold transition ${active?'bg-bank-600 text-white shadow':'bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-700'} ${disabled?'opacity-40 cursor-not-allowed':''}">${label}</button>`;
  let html=btn('‹', agendaCurrentPage-1, agendaCurrentPage<=1, false);
  const windowSize=5;
  let from=Math.max(1, agendaCurrentPage-Math.floor(windowSize/2));
  let to=Math.min(totalPages, from+windowSize-1);
  from=Math.max(1, to-windowSize+1);
  if(from>1) html+=btn('1',1,false,false)+(from>2?'<span class="px-1 text-slate-400 text-xs">…</span>':'');
  for(let p=from;p<=to;p++) html+=btn(String(p),p,false,p===agendaCurrentPage);
  if(to<totalPages) html+=(to<totalPages-1?'<span class="px-1 text-slate-400 text-xs">…</span>':'')+btn(String(totalPages),totalPages,false,false);
  html+=btn('›', agendaCurrentPage+1, agendaCurrentPage>=totalPages, false);
  box.innerHTML=html;
}

function goAgendaPage(page){
  agendaCurrentPage=page;
  renderAgendaTable(false);
}

function changeAgendaPageSize(){
  const el=document.getElementById('agendaPageSize');
  agendaPageSize=parseInt(el&&el.value,10)||25;
  agendaCurrentPage=1;
  renderAgendaTable(false);
}

function getAgendaFilteredLogs(){
  // gunakan cache jika sudah ada, else hitung ulang
  if(agendaFilteredCache && agendaFilteredCache.length>=0 && document.getElementById('agendaTableBody')){
    // recompute to be safe
  }
  const kw=(document.getElementById('searchKeyword')?.value||'').toLowerCase();
  const filterCode=document.getElementById('filterCodeCategory')?.value||'ALL';
  const dateFrom=document.getElementById('filterDateFrom')?.value||'';
  const dateTo=document.getElementById('filterDateTo')?.value||'';
  return letterLogs.filter(log=>{
    const matchKw=(log.fullNumber||'').toLowerCase().includes(kw)||(log.recipient||'').toLowerCase().includes(kw)||(log.subject||'').toLowerCase().includes(kw);
    const matchCode=filterCode==='ALL'||log.tertiaryCode===filterCode;
    const matchFrom=!dateFrom||(log.date&&log.date>=dateFrom);
    const matchTo=!dateTo||(log.date&&log.date<=dateTo);
    return matchKw&&matchCode&&matchFrom&&matchTo;
  });
}

function renderCounterGrid(){
  const grid=document.getElementById('counterGrid');grid.innerHTML='';
  classifications.forEach(item=>{const cur=tertiaryCounters[item.code]||0,next=cur+1,isFav=favoriteCodes.includes(item.code);
    const card=document.createElement('div');card.className='bg-white dark:bg-navy-900 rounded-2xl p-4 border border-slate-200/80 dark:border-navy-800 shadow-bank flex flex-col justify-between hover:shadow-bank-lg transition';
    card.innerHTML=`<div><div class="flex items-center justify-between mb-2.5"><span class="font-mono font-bold text-xs bg-navy-900 dark:bg-bank-700 text-white px-2.5 py-1 rounded-lg">${item.code}</span><div class="flex items-center gap-1.5"><span class="text-[10px] font-semibold text-slate-400 bg-slate-50 dark:bg-navy-800 px-2 py-0.5 rounded-lg border border-slate-200 dark:border-navy-700">${item.category}</span><button onclick="toggleFavorite('${item.code}')" class="text-sm ${isFav?'text-amber-400':'text-slate-300 dark:text-slate-600'} hover:text-amber-400 transition" title="Favorit"><i class="fa-${isFav?'solid':'regular'} fa-star"></i></button></div></div><p class="text-xs font-medium text-slate-600 dark:text-slate-400 line-clamp-2 mb-3">${item.description}</p></div><div class="pt-3 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between"><div><div class="text-[9px] text-slate-400 uppercase tracking-wider">Terakhir</div><div class="font-mono font-extrabold text-lg text-emerald-600 tabular-nums">${formatSequenceNumber(cur)}</div></div><div class="text-right"><div class="text-[9px] text-slate-400 uppercase tracking-wider">Berikutnya</div><div class="font-mono font-bold text-[10px] text-bank-600 dark:text-bank-400 max-w-[130px] truncate">${settings.uptPrefix}.${item.code}-${formatSequenceNumber(next)}</div></div></div>`;
    grid.appendChild(card)});
}
function toggleFavorite(code){const idx=favoriteCodes.indexOf(code);if(idx>=0)favoriteCodes.splice(idx,1);else favoriteCodes.push(code);saveStateToStorage();renderCounterGrid();renderFavoriteCodes()}
function renderFavoriteCodes(){const el=document.getElementById('favoriteCodesList');if(!el)return;if(!favoriteCodes.length){el.innerHTML='<p class="text-xs text-slate-400">Tandai ⭐ di tab Kode & Counter</p>';return}
  el.innerHTML=favoriteCodes.map(code=>{const item=classifications.find(c=>c.code===code);return`<button onclick="quickSelectCode('${code}')" class="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-navy-800 transition text-left"><span class="font-mono text-[11px] font-bold text-bank-700 dark:text-bank-400">${code}</span><span class="text-[10px] text-slate-400 truncate ml-2">${item?item.description.substring(0,24):''}…</span></button>`}).join('')}
function quickSelectCode(code){switchTab('tab-generate');const item=classifications.find(c=>c.code===code);if(item){document.getElementById('selectMainCategory').value=item.category;populateClassificationOptions();document.getElementById('selectClassification').value=code;updateNumberPreview()}}
function getPeriodRange(period){const today=getWIBDate();let start,end,label;if(period==='weekly'){const dow=today.getDay(),diff=dow===0?6:dow-1;start=new Date(today);start.setDate(today.getDate()-diff);end=new Date(start);end.setDate(start.getDate()+6);label=`Minggu: ${formatIndonesianDate(toDateStr(start))} – ${formatIndonesianDate(toDateStr(end))}`}else if(period==='yearly'){start=new Date(today.getFullYear(),0,1);end=new Date(today.getFullYear(),11,31);label=`Tahun ${today.getFullYear()}`}else{start=new Date(today.getFullYear(),today.getMonth(),1);end=new Date(today.getFullYear(),today.getMonth()+1,0);const m=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];label=`${m[today.getMonth()]} ${today.getFullYear()}`}return{start:toDateStr(start),end:toDateStr(end),label}}
function toDateStr(d){return`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function setStatPeriod(period){statCurrentPeriod=period;document.querySelectorAll('.stat-period-btn').forEach(b=>{b.classList.remove('bg-bank-600','text-white','shadow');b.classList.add('text-slate-600','dark:text-slate-400')});const btn=document.getElementById('btn-period-'+period);if(btn){btn.classList.add('bg-bank-600','text-white','shadow');btn.classList.remove('text-slate-600','dark:text-slate-400')}renderStatistikTab()}
function renderStatistikTab(){const rangeEl=document.getElementById('statPeriodRangeLabel'),rankEl=document.getElementById('statCodeRanking'),emptyEl=document.getElementById('statEmptyState');if(!rankEl)return;const range=getPeriodRange(statCurrentPeriod);rangeEl.innerText=range.label;const logs=letterLogs.filter(l=>l.date&&l.date>=range.start&&l.date<=range.end);const counts={};logs.forEach(l=>{const c=l.tertiaryCode||'(Tanpa Kode)';counts[c]=(counts[c]||0)+1});const ranked=Object.keys(counts).map(c=>({code:c,count:counts[c]})).sort((a,b)=>b.count-a.count).slice(0,10);rankEl.innerHTML='';if(!ranked.length){emptyEl.classList.remove('hidden');return}emptyEl.classList.add('hidden');const max=ranked[0].count;ranked.forEach((item,idx)=>{const classif=classifications.find(c=>c.code===item.code),desc=classif?classif.description:'Tidak terdaftar',pct=Math.max(8,Math.round((item.count/max)*100));const row=document.createElement('div');row.className='flex items-center gap-3 cursor-pointer group';row.onclick=()=>openCodeDetailModal(item.code,range,logs);row.innerHTML=`<div class="w-6 text-center text-xs font-extrabold text-slate-400 tabular-nums">${idx+1}</div><div class="flex-grow bg-slate-50 dark:bg-navy-800/50 group-hover:bg-slate-100 dark:group-hover:bg-navy-800 rounded-xl p-3 border border-slate-200/80 dark:border-navy-700 transition"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2 min-w-0"><span class="font-mono font-bold text-[11px] bg-navy-900 dark:bg-bank-700 text-white px-2 py-0.5 rounded-lg shrink-0">${item.code}</span><span class="text-xs text-slate-600 dark:text-slate-400 truncate">${escapeHtml(desc)}</span></div><span class="text-sm font-extrabold text-navy-900 dark:text-white shrink-0 ml-2 tabular-nums">${item.count}</span></div><div class="w-full h-1.5 bg-slate-200 dark:bg-navy-700 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-bank-400 to-bank-600 rounded-full" style="width:${pct}%"></div></div></div>`;rankEl.appendChild(row)})}
function runGapDetection(silent=false){const gaps=[],byCode={};letterLogs.forEach(l=>{if(!l.tertiaryCode||!l.counterNumber)return;if(!byCode[l.tertiaryCode])byCode[l.tertiaryCode]=[];byCode[l.tertiaryCode].push(l.counterNumber)});Object.keys(byCode).forEach(code=>{const nums=[...new Set(byCode[code])].sort((a,b)=>a-b);for(let i=1;i<nums.length;i++){if(nums[i]-nums[i-1]>1){const missing=[];for(let n=nums[i-1]+1;n<nums[i];n++)missing.push(n);gaps.push({code,missing:missing.slice(0,5),more:missing.length>5})}}});const section=document.getElementById('gapAlertsSection'),list=document.getElementById('gapAlertsList');if(!section||!list)return;if(!gaps.length){section.classList.add('hidden');if(!silent)showToast('Tidak ada gap nomor terdeteksi');return}section.classList.remove('hidden');list.innerHTML=gaps.map(g=>`<div class="flex items-start gap-2 p-2.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800"><i class="fa-solid fa-triangle-exclamation text-amber-500 mt-0.5"></i><div><span class="font-mono font-bold text-amber-900 dark:text-amber-200">${g.code}</span><span class="text-amber-800 dark:text-amber-300"> — nomor terlewati: ${g.missing.map(n=>formatSequenceNumber(n)).join(', ')}${g.more?'…':''}</span></div></div>`).join('');if(!silent)showToast(`Ditemukan ${gaps.length} kode dengan gap nomor`,'info')}
function openCodeDetailModal(code,range,logs){openLetterListModal(`Kode ${code} — ${range.label} (${logs.filter(l=>(l.tertiaryCode||'')===code).length} surat)`,logs.filter(l=>(l.tertiaryCode||'')===code))}
function openStatDetailModal(type){const today=getWIBDateString(),month=today.substring(0,7);let filtered,title;if(type==='today'){filtered=letterLogs.filter(l=>l.date===today);title=`Hari Ini — ${formatIndonesianDate(today)} (${filtered.length})`}else{filtered=letterLogs.filter(l=>l.date&&l.date.startsWith(month));title=`Bulan Ini (${filtered.length})`}openLetterListModal(title,filtered)}
function openLetterListModal(title,logs){document.getElementById('letterListModalTitle').innerText=title;const tbody=document.getElementById('letterListModalBody'),empty=document.getElementById('letterListModalEmpty');tbody.innerHTML='';const sorted=[...logs].sort((a,b)=>(b.date||'').localeCompare(a.date||''));if(!sorted.length)empty.classList.remove('hidden');else{empty.classList.add('hidden');sorted.forEach((log,i)=>{const tr=document.createElement('tr');tr.className='hover:bg-slate-50 dark:hover:bg-navy-800';tr.innerHTML=`<td class="p-2.5 text-center text-slate-400 font-semibold">${i+1}</td><td class="p-2.5 font-mono font-bold text-bank-700 dark:text-bank-400 text-[11px] whitespace-nowrap">${log.fullNumber}</td><td class="p-2.5 whitespace-nowrap">${formatIndonesianDate(log.date)}</td><td class="p-2.5 max-w-[130px] truncate">${escapeHtml(log.recipient)}</td><td class="p-2.5 max-w-[150px] truncate">${escapeHtml(log.subject)}</td>`;tbody.appendChild(tr)})}document.getElementById('letterListModal').classList.remove('hidden')}
function closeLetterListModal(){document.getElementById('letterListModal').classList.add('hidden')}
function switchTab(tabId){document.querySelectorAll('.tab-content').forEach(el=>el.classList.add('hidden'));document.querySelectorAll('.nav-item').forEach(btn=>{btn.classList.remove('active');btn.classList.add('text-slate-600','dark:text-slate-300')});document.getElementById(tabId).classList.remove('hidden');const btn=document.getElementById('btn-'+tabId);if(btn){btn.classList.add('active');btn.classList.remove('text-slate-600','dark:text-slate-300')}closeMobileSidebar()}
function openMobileSidebar(){document.getElementById('sidebar').classList.remove('-translate-x-full');document.getElementById('sidebarOverlay').classList.remove('hidden')}
function closeMobileSidebar(){document.getElementById('sidebar').classList.add('-translate-x-full');document.getElementById('sidebarOverlay').classList.add('hidden')}
function toggleDarkMode(){document.documentElement.classList.toggle('dark');localStorage.setItem('bapas_dark',document.documentElement.classList.contains('dark')?'1':'0')}
function openPrintKopModal(){const code=document.getElementById('selectClassification').value,seq=formatSequenceNumber(getNextCounterForCode(code));document.getElementById('kopNomor').innerText=`${settings.uptPrefix}.${code}-${seq}`;document.getElementById('kopSifat').innerText=document.getElementById('inputSifat').value;document.getElementById('kopLampiran').innerText=document.getElementById('inputLampiran').value||'—';document.getElementById('kopHal').innerText=document.getElementById('inputSubject').value||'—';document.getElementById('kopTujuan').innerText=document.getElementById('inputRecipient').value||'—';document.getElementById('kopTanggal').innerText='Lahat, '+formatIndonesianDate(document.getElementById('inputDate').value);document.getElementById('kopPreviewModal').classList.remove('hidden')}
function previewLetterKop(id){const log=letterLogs.find(l=>l.id===id);if(!log)return;document.getElementById('kopNomor').innerText=log.fullNumber;document.getElementById('kopSifat').innerText=log.sifat;document.getElementById('kopLampiran').innerText=log.lampiran;document.getElementById('kopHal').innerText=log.subject;document.getElementById('kopTujuan').innerText=log.recipient;document.getElementById('kopTanggal').innerText='Lahat, '+formatIndonesianDate(log.date);document.getElementById('kopPreviewModal').classList.remove('hidden')}
function closeKopModal(){document.getElementById('kopPreviewModal').classList.add('hidden')}
function toggleGuidelineModal(){document.getElementById('guidelineModal').classList.toggle('hidden')}
function openAddCodeModal(){document.getElementById('addCodeModal').classList.remove('hidden')}
function closeAddCodeModal(){document.getElementById('addCodeModal').classList.add('hidden')}
function saveCustomCode(){const cat=document.getElementById('modalCodeCategory').value,code=document.getElementById('modalCodeNumber').value.trim().toUpperCase(),desc=document.getElementById('modalCodeDesc').value.trim();if(!code||!desc){showToast('Isi semua field','error');return}if(classifications.some(c=>c.code===code)){showToast('Kode sudah ada','error');return}classifications.push({category:cat,code,description:desc});recalculateTertiaryCounters();saveStateToStorage();populateClassificationOptions();renderCounterGrid();closeAddCodeModal();showToast(`Kode ${code} ditambahkan`)}
function editLetter(id){const log=letterLogs.find(l=>l.id===id);if(!log){showToast('Tidak ditemukan','error');return}document.getElementById('editLetterId').value=log.id;document.getElementById('editLetterNumberLabel').innerText=log.fullNumber;document.getElementById('editPrefixCodeLabel').innerText=`${log.uptPrefix||settings.uptPrefix}.${log.tertiaryCode||''}`;document.getElementById('editInputSequence').value=log.formattedSequence||'';updateEditPreviewFullNumber();document.getElementById('editInputDate').value=log.date||'';document.getElementById('editInputSifat').value=log.sifat||'Biasa';document.getElementById('editInputLampiran').value=log.lampiran||'';document.getElementById('editInputRecipient').value=log.recipient||'';document.getElementById('editInputSubject').value=log.subject||'';document.getElementById('editInputSection').value=log.section||'';document.getElementById('editInputNotes').value=log.notes||'';document.getElementById('editLetterModal').classList.remove('hidden')}
function closeEditLetterModal(){document.getElementById('editLetterModal').classList.add('hidden')}
function updateEditPreviewFullNumber(){const p=document.getElementById('editPrefixCodeLabel').innerText,s=document.getElementById('editInputSequence').value.trim();document.getElementById('editPreviewFullNumber').innerText=s?`${p}-${s}`:`${p}-…`}
async function saveEditedLetter(){const id=document.getElementById('editLetterId').value,idx=letterLogs.findIndex(l=>l.id===id);if(idx<0){showToast('Tidak ditemukan','error');return}const seq=document.getElementById('editInputSequence').value.trim();if(!seq){showToast('Nomor urut wajib diisi','error');return}const cur=letterLogs[idx],prefix=`${cur.uptPrefix||settings.uptPrefix}.${cur.tertiaryCode||''}`,full=`${prefix}-${seq}`;if(letterLogs.some(l=>l.id!==id&&l.fullNumber===full)){showToast('Nomor sudah dipakai','error');return}const parsed=parseInt(seq,10);const fields={date:document.getElementById('editInputDate').value,sifat:document.getElementById('editInputSifat').value,lampiran:document.getElementById('editInputLampiran').value||'—',recipient:document.getElementById('editInputRecipient').value,subject:document.getElementById('editInputSubject').value,section:document.getElementById('editInputSection').value,notes:document.getElementById('editInputNotes').value||'—',formattedSequence:seq,fullNumber:full,counterNumber:isNaN(parsed)?cur.counterNumber:parsed};letterLogs[idx]={...letterLogs[idx],...fields};recalculateTertiaryCounters();saveStateToStorage();renderAgendaTable();renderDashboardStats();renderCounterGrid();renderRecentLetters();updateNumberPreview();closeEditLetterModal();showToast('Menyimpan…','info');try{await fetch(WEB_APP_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'update',id,...fields})});showToast('Perubahan tersimpan')}catch(e){showToast('Lokal OK, gagal sinkron','error')}}
function duplicateLetter(id){const log=letterLogs.find(l=>l.id===id);if(!log)return;switchTab('tab-generate');const item=classifications.find(c=>c.code===log.tertiaryCode);if(item){document.getElementById('selectMainCategory').value=item.category;populateClassificationOptions();document.getElementById('selectClassification').value=log.tertiaryCode}document.getElementById('inputSifat').value=log.sifat||'Biasa';document.getElementById('inputLampiran').value=log.lampiran||'';document.getElementById('inputRecipient').value=log.recipient||'';document.getElementById('inputSubject').value=log.subject||'';document.getElementById('inputSection').value=log.section||'';document.getElementById('inputNotes').value=log.notes||'';setTodayDateInForm();updateNumberPreview();showToast('Form diisi dari surat sebelumnya. Nomor baru di-generate saat simpan.','info')}
async function deleteLetter(id){if(!confirm('Hapus arsip surat ini?'))return;letterLogs=letterLogs.filter(l=>l.id!==id);recalculateTertiaryCounters();saveStateToStorage();renderAgendaTable();renderDashboardStats();renderCounterGrid();renderRecentLetters();updateNumberPreview();showToast('Menghapus…','info');try{await fetch(WEB_APP_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'delete',id})});showToast('Berhasil dihapus')}catch(e){showToast('Lokal OK, gagal sinkron','error')}}
function exportJSONBackup(){const data={exportedAt:getWIBFullTimestamp(),version:2,settings,classifications,letterLogs,favoriteCodes};const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`Backup_Bapas_Lahat_${getWIBDateString()}.json`;a.click();showToast('Backup JSON diunduh')}
function importJSONBackup(event){const file=event.target.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=e=>{try{const data=JSON.parse(e.target.result);if(!data.letterLogs&&!data.classifications)throw new Error('Format tidak valid');if(!confirm(`Impor backup? Data saat ini diganti.\nSurat: ${(data.letterLogs||[]).length} · Kode: ${(data.classifications||[]).length}`))return;if(data.classifications)classifications=data.classifications;if(data.letterLogs)letterLogs=data.letterLogs;if(data.settings)settings={...settings,...data.settings};if(data.favoriteCodes)favoriteCodes=data.favoriteCodes;recalculateTertiaryCounters();saveStateToStorage();populateClassificationOptions();updateNumberPreview();renderDashboardStats();renderAgendaTable();renderCounterGrid();renderRecentLetters();renderFavoriteCodes();showToast('Backup berhasil diimpor')}catch(err){showToast('File tidak valid: '+err.message,'error')}event.target.value=''};reader.readAsText(file)}
function saveSettings(){settings.numberFormat=document.getElementById('settingNumberFormat').value;saveStateToStorage();updateNumberPreview();renderCounterGrid();showToast('Pengaturan disimpan')}
function copyGeneratedNumber(){copyTextToClipboard(document.getElementById('previewFullNumber').innerText)}
function copyTextToClipboard(text){if(navigator.clipboard?.writeText)navigator.clipboard.writeText(text);else{const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta)}showToast(`Disalin: ${text}`)}
function clearAllData(){if(!confirm('Hapus SELURUH data arsip dan counter?'))return;letterLogs=[];recalculateTertiaryCounters();saveStateToStorage();renderAgendaTable();renderDashboardStats();renderCounterGrid();renderRecentLetters();updateNumberPreview();showToast('Data dibersihkan','error')}
function restoreDefaultData(){
  if(!confirm('Muat ulang klasifikasi dari Google Sheet Master Klasifikasi?')) return;
  showToast('Mengambil Master Klasifikasi…','info');
  fetchClassificationsFromSheets(false).then(function(ok){
    if(!ok){
      classifications=[...DEFAULT_CLASSIFICATIONS];
      saveStateToStorage();
      populateClassificationOptions();
      renderCounterGrid();
      showToast('Sheet tidak tersedia, pakai data default lokal','error');
    }
  });
}
function updateRecipientSuggestions(){const dl=document.getElementById('recipientSuggestions');if(!dl)return;const unique=[...new Set(letterLogs.map(l=>l.recipient).filter(Boolean))].slice(0,30);dl.innerHTML=unique.map(r=>`<option value="${escapeHtml(r)}">`).join('')}
function handleGlobalSearch(){const q=(document.getElementById('globalSearch').value||'').toLowerCase().trim(),box=document.getElementById('globalSearchResults');if(!q||q.length<2){box.classList.add('hidden');return}const hits=letterLogs.filter(l=>(l.fullNumber||'').toLowerCase().includes(q)||(l.recipient||'').toLowerCase().includes(q)||(l.subject||'').toLowerCase().includes(q)).slice(0,8);if(!hits.length){box.innerHTML='<div class="p-3 text-xs text-slate-400">Tidak ditemukan</div>';box.classList.remove('hidden');return}box.innerHTML=hits.map(l=>`<button onclick="previewLetterKop('${l.id}');document.getElementById('globalSearchResults').classList.add('hidden');document.getElementById('globalSearch').value=''" class="w-full text-left px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-navy-800 border-b border-slate-100 dark:border-navy-800 last:border-0 transition"><div class="font-mono text-[11px] font-bold text-bank-700 dark:text-bank-400">${l.fullNumber}</div><div class="text-xs text-slate-500 truncate">${escapeHtml(l.subject)}</div></button>`).join('');box.classList.remove('hidden')}
document.addEventListener('click',e=>{if(!e.target.closest('#globalSearch')&&!e.target.closest('#globalSearchResults'))document.getElementById('globalSearchResults')?.classList.add('hidden')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')['guidelineModal','kopPreviewModal','letterListModal','editLetterModal','addCodeModal'].forEach(id=>document.getElementById(id)?.classList.add('hidden'));if((e.ctrlKey||e.metaKey)&&e.key==='n'){e.preventDefault();switchTab('tab-generate')}if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();document.getElementById('globalSearch')?.focus()}if((e.ctrlKey||e.metaKey)&&e.key==='s'){e.preventDefault();fetchDataFromGoogleSheets(false)}});
function formatIndonesianDate(dateStr){if(!dateStr)return'—';const p=dateStr.split('-');if(p.length!==3)return dateStr;const m=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];return`${parseInt(p[2],10)} ${m[parseInt(p[1],10)-1]} ${p[0]}`}
function getSifatBadgeColor(s){switch(s){case'Sangat Segera':return'bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800';case'Segera':return'bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800';case'Penting':return'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800';case'Rahasia':return'bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800';default:return'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'}}
function escapeHtml(s){if(!s)return'';return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;')}
let sharedAudioCtx=null;function playSuccessSound(){try{if(!sharedAudioCtx)sharedAudioCtx=new(window.AudioContext||window.webkitAudioContext)();if(sharedAudioCtx.state==='suspended')sharedAudioCtx.resume();const now=sharedAudioCtx.currentTime;[{freq:880,start:0,dur:.12},{freq:1174.66,start:.11,dur:.22}].forEach(n=>{const o=sharedAudioCtx.createOscillator(),g=sharedAudioCtx.createGain();o.type='sine';o.frequency.value=n.freq;g.gain.setValueAtTime(0,now+n.start);g.gain.linearRampToValueAtTime(.25,now+n.start+.02);g.gain.exponentialRampToValueAtTime(.001,now+n.start+n.dur);o.connect(g);g.connect(sharedAudioCtx.destination);o.start(now+n.start);o.stop(now+n.start+n.dur+.05)})}catch(e){}}
function showToast(msg,type='success'){const toast=document.getElementById('toast'),icon=document.getElementById('toastIcon');document.getElementById('toastMessage').innerText=msg;if(type==='error')icon.className='fa-solid fa-circle-exclamation text-red-400 shrink-0';else if(type==='info')icon.className='fa-solid fa-circle-info text-blue-400 shrink-0';else icon.className='fa-solid fa-circle-check text-emerald-400 shrink-0';toast.classList.remove('hidden');setTimeout(()=>toast.classList.add('hidden'),3200)}


/* ===== EKSPOR TERFILTER PER KODE + PERIODE ===== */
function getExportDateRange() {
  const type = (document.getElementById('exportPeriodType') || {}).value || 'all';
  if (type === 'all') return { start: null, end: null, label: 'Semua waktu' };

  if (type === 'custom') {
    const from = document.getElementById('exportDateFrom')?.value || '';
    const to = document.getElementById('exportDateTo')?.value || '';
    let label = 'Rentang kustom';
    if (from && to) label = formatIndonesianDate(from) + ' – ' + formatIndonesianDate(to);
    else if (from) label = 'Dari ' + formatIndonesianDate(from);
    else if (to) label = 'Sampai ' + formatIndonesianDate(to);
    return { start: from || null, end: to || null, label };
  }

  const val = document.getElementById('exportPeriodValue')?.value || '';
  const today = getWIBDate();

  if (type === 'monthly') {
    // val = YYYY-MM
    if (!val) {
      const y = today.getFullYear(), m = String(today.getMonth()+1).padStart(2,'0');
      const start = y + '-' + m + '-01';
      const endDate = new Date(y, today.getMonth()+1, 0);
      const end = toDateStr(endDate);
      return { start, end, label: val || (y + '-' + m) };
    }
    const [y, m] = val.split('-').map(Number);
    const start = val + '-01';
    const endDate = new Date(y, m, 0);
    const end = toDateStr(endDate);
    const monthNames = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    return { start, end, label: monthNames[m-1] + ' ' + y };
  }

  if (type === 'yearly') {
    // val = YYYY
    const y = parseInt(val, 10) || today.getFullYear();
    return { start: y + '-01-01', end: y + '-12-31', label: 'Tahun ' + y };
  }

  if (type === 'weekly') {
    // val = YYYY-MM-DD (Senin minggu tersebut) — gunakan input week jika ada, atau date
    let base;
    if (val) base = new Date(val + 'T12:00:00');
    else base = today;
    const day = base.getDay();
    const diffMon = day === 0 ? 6 : day - 1;
    const start = new Date(base);
    start.setDate(base.getDate() - diffMon);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return {
      start: toDateStr(start),
      end: toDateStr(end),
      label: 'Minggu ' + formatIndonesianDate(toDateStr(start)) + ' – ' + formatIndonesianDate(toDateStr(end))
    };
  }

  return { start: null, end: null, label: 'Semua waktu' };
}

function getFilteredLettersForExport() {
  const code = document.getElementById('exportCodeSelect')?.value || 'ALL';
  const range = getExportDateRange();
  return letterLogs.filter(l => {
    const matchCode = code === 'ALL' || l.tertiaryCode === code;
    const matchFrom = !range.start || (l.date && l.date >= range.start);
    const matchTo = !range.end || (l.date && l.date <= range.end);
    return matchCode && matchFrom && matchTo;
  });
}

function onExportPeriodTypeChange() {
  const type = document.getElementById('exportPeriodType')?.value || 'all';
  const pickerWrap = document.getElementById('exportPeriodPickerWrap');
  const customWrap = document.getElementById('exportCustomRangeWrap');
  const label = document.getElementById('exportPeriodLabel');
  const input = document.getElementById('exportPeriodValue');
  if (!pickerWrap || !input) return;

  const today = getWIBDate();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth()+1).padStart(2,'0');
  const dd = String(today.getDate()).padStart(2,'0');

  if (type === 'all') {
    pickerWrap.classList.add('hidden');
    customWrap?.classList.add('hidden');
  } else if (type === 'custom') {
    pickerWrap.classList.add('hidden');
    customWrap?.classList.remove('hidden');
  } else {
    pickerWrap.classList.remove('hidden');
    customWrap?.classList.add('hidden');
    if (type === 'monthly') {
      if (label) label.innerText = 'Bulan';
      input.type = 'month';
      input.value = yyyy + '-' + mm;
    } else if (type === 'yearly') {
      if (label) label.innerText = 'Tahun';
      input.type = 'number';
      input.min = '2020';
      input.max = String(yyyy + 1);
      input.placeholder = 'YYYY';
      input.value = String(yyyy);
    } else if (type === 'weekly') {
      if (label) label.innerText = 'Tanggal dalam minggu';
      input.type = 'date';
      input.value = yyyy + '-' + mm + '-' + dd;
    }
  }
  updateExportPreview();
}

function updateExportPreview() {
  const filtered = getFilteredLettersForExport();
  const range = getExportDateRange();
  const code = document.getElementById('exportCodeSelect')?.value || 'ALL';
  const countEl = document.getElementById('exportPreviewCount');
  const rangeEl = document.getElementById('exportPreviewRange');
  if (countEl) countEl.innerText = String(filtered.length);
  if (rangeEl) {
    const codeLabel = code === 'ALL' ? 'Semua kode' : code;
    rangeEl.innerText = codeLabel + ' · ' + range.label;
  }
}

function exportFilteredCSV() {
  const filtered = getFilteredLettersForExport();
  if (!filtered.length) {
    showToast('Tidak ada data sesuai filter', 'error');
    return;
  }
  const code = document.getElementById('exportCodeSelect')?.value || 'ALL';
  const range = getExportDateRange();
  downloadCSV(filtered, code, range);
  showToast('CSV terfilter diunduh (' + filtered.length + ' surat)');
}

function downloadCSV(logs, code, range) {
  let csv = '\uFEFF'; // BOM agar Excel baca UTF-8
  csv += 'No,Nomor Surat,Tanggal,Waktu Input,Sifat,Lampiran,Tujuan,Perihal,Seksi,Catatan,Kode Tersier\n';
  logs.forEach((l, i) => {
    csv += [
      i + 1,
      '"' + (l.fullNumber || '') + '"',
      '"' + (l.date || '') + '"',
      '"' + (l.timestamp || '') + '"',
      '"' + (l.sifat || '') + '"',
      '"' + (l.lampiran || '') + '"',
      '"' + String(l.recipient || '').replace(/"/g, '""') + '"',
      '"' + String(l.subject || '').replace(/"/g, '""') + '"',
      '"' + (l.section || '') + '"',
      '"' + String(l.notes || '').replace(/"/g, '""') + '"',
      '"' + (l.tertiaryCode || '') + '"'
    ].join(',') + '\n';
  });
  const codePart = code === 'ALL' ? 'SemuaKode' : code.replace(/\./g, '_');
  const periodPart = (range && range.label) ? range.label.replace(/\s+/g, '_').replace(/[–—]/g, '-').replace(/[^a-zA-Z0-9_\-]/g, '') : 'Semua';
  const filename = 'Agenda_' + codePart + '_' + periodPart + '_' + getWIBDateString() + '.csv';
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

// Override exportToCSV agar memakai downloadCSV yang sama
function exportToCSV() {
  if (!letterLogs.length) {
    showToast('Tidak ada data', 'error');
    return;
  }
  downloadCSV(letterLogs, 'ALL', { label: 'Semua' });
  showToast('CSV agenda diunduh');
}


/* ===== EKSPOR EXCEL & PDF ===== */
function logsToSheetRows(logs){
  const header=['No','Nomor Surat','Tanggal','Waktu Input','Sifat','Lampiran','Tujuan','Perihal','Seksi','Catatan','Kode Tersier'];
  const rows=[header];
  logs.forEach((l,i)=>{
    rows.push([
      i+1,
      l.fullNumber||'',
      l.date||'',
      l.timestamp||'',
      l.sifat||'',
      l.lampiran||'',
      l.recipient||'',
      l.subject||'',
      l.section||'',
      l.notes||'',
      l.tertiaryCode||''
    ]);
  });
  return rows;
}

function exportLogsToExcel(logs, filenameBase){
  if(typeof XLSX==='undefined'){ showToast('Library Excel belum termuat','error'); return; }
  if(!logs.length){ showToast('Tidak ada data untuk diekspor','error'); return; }
  const rows=logsToSheetRows(logs);
  const ws=XLSX.utils.aoa_to_sheet(rows);
  // lebar kolom kasar
  ws['!cols']=[{wch:5},{wch:28},{wch:12},{wch:20},{wch:12},{wch:12},{wch:30},{wch:35},{wch:20},{wch:18},{wch:12}];
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Agenda Surat');
  XLSX.writeFile(wb, (filenameBase||'Agenda_Bapas_Lahat')+'_'+getWIBDateString()+'.xlsx');
  showToast('File Excel diunduh ('+logs.length+' surat)');
}

function exportLogsToPDF(logs, titleExtra){
  if(typeof window.jspdf==='undefined' && typeof jspdf==='undefined'){ showToast('Library PDF belum termuat','error'); return; }
  if(!logs.length){ showToast('Tidak ada data untuk diekspor','error'); return; }
  const { jsPDF } = window.jspdf || jspdf;
  const doc=new jsPDF({ orientation:'landscape', unit:'mm', format:'a4' });
  const title='Agenda Surat Keluar — Bapas Kelas II Lahat';
  doc.setFontSize(12);
  doc.setFont('helvetica','bold');
  doc.text(title, 14, 12);
  doc.setFontSize(8);
  doc.setFont('helvetica','normal');
  doc.setTextColor(100);
  doc.text((titleExtra||'')+' · Dicetak: '+getWIBFullTimestamp()+' · WP.6.PAS22', 14, 17);
  doc.setTextColor(0);

  const body=logs.map((l,i)=>[
    String(i+1),
    l.fullNumber||'',
    formatIndonesianDate(l.date),
    l.sifat||'',
    (l.recipient||'').substring(0,40),
    (l.subject||'').substring(0,45),
    l.tertiaryCode||''
  ]);

  doc.autoTable({
    startY: 20,
    head: [['No','Nomor Surat','Tanggal','Sifat','Tujuan','Perihal','Kode']],
    body,
    styles: { fontSize: 7, cellPadding: 1.5, overflow: 'linebreak' },
    headStyles: { fillColor: [15, 26, 46], textColor: 255, fontStyle: 'bold' },
    alternateRowStyles: { fillColor: [245, 247, 250] },
    columnStyles: {
      0: { cellWidth: 10 },
      1: { cellWidth: 45, fontStyle: 'bold' },
      2: { cellWidth: 28 },
      3: { cellWidth: 22 },
      4: { cellWidth: 50 },
      5: { cellWidth: 55 },
      6: { cellWidth: 22 }
    },
    margin: { left: 14, right: 14 }
  });

  const pageCount=doc.internal.getNumberOfPages();
  for(let p=1;p<=pageCount;p++){
    doc.setPage(p);
    doc.setFontSize(7);
    doc.setTextColor(150);
    doc.text('Halaman '+p+' / '+pageCount, doc.internal.pageSize.getWidth()-14, doc.internal.pageSize.getHeight()-8, { align:'right' });
  }

  doc.save('Agenda_Bapas_Lahat_'+(titleExtra?titleExtra.replace(/\s+/g,'_').replace(/[^a-zA-Z0-9_\-]/g,''):'Semua')+'_'+getWIBDateString()+'.pdf');
  showToast('File PDF diunduh ('+logs.length+' surat)');
}

function exportAgendaExcel(){
  const logs=getAgendaFilteredLogs();
  exportLogsToExcel(logs, 'Agenda_Filter');
}
function exportAgendaPDF(){
  const logs=getAgendaFilteredLogs();
  exportLogsToPDF(logs, 'Filter Agenda');
}
function exportFilteredExcel(){
  const logs=getFilteredLettersForExport();
  const code=document.getElementById('exportCodeSelect')?.value||'ALL';
  const range=getExportDateRange();
  const name='Agenda_'+(code==='ALL'?'SemuaKode':code.replace(/\./g,'_'))+'_'+(range.label||'').replace(/\s+/g,'_');
  exportLogsToExcel(logs, name);
}
function exportFilteredPDF(){
  const logs=getFilteredLettersForExport();
  const code=document.getElementById('exportCodeSelect')?.value||'ALL';
  const range=getExportDateRange();
  const label=(code==='ALL'?'Semua kode':code)+' · '+(range.label||'');
  exportLogsToPDF(logs, label);
}
