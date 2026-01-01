/*
 * Cave Proposal Generator
 * Plain JavaScript version replicating the React app functionality.
 */

// Default proposal data (from defaultProposal.json)
const defaultData = {
  "meta": {
    "proposalNumber": "CFP-PTI-001",
    "date": "2025-12-23",
    "preparedFor": "Phoenix T-Shirts",
    "attentionName": "Lina",
    "attentionTitle": "Project Lead",
    "attentionEmail": "lina@example.com",
    "attentionPhone": "(XXX) XXX-XXXX",
    "projectName": "Phoenix T-Shirts TI (Fire Sprinkler + Fire Alarm)",
    "projectLocation": "4601 E McDowell Rd, Phoenix, AZ 85008",
    "ahj": "City of Phoenix Fire Department",
    "validityDays": 30,
    "companyName": "Cave Fire Protection, LLC",
    "companyPhone": "(XXX) XXX-XXXX",
    "companyEmail": "info@cavefireprotection.com",
    "companyWebsite": "cavefireprotection.com"
  },
  "executiveSummary": "Cave Fire Protection, LLC proposes a turnkey package for the Phoenix T-Shirts TI: underground fire service with DCDA and FDC, interior wet-pipe sprinkler with riser/valves, and a compact addressable fire alarm for notification and sprinkler monitoring. Includes engineering, permitting, installation, testing, AHJ coordination, and closeout docs.",
  "scopeOfWork": [
    "Prepare hydraulic calcs and shop drawings; submit for AHJ approval",
    "Furnish and install underground fire service incl. DCDA/backflow and FDC; trench/saw-cut/patch; flush/hydro",
    "Provide new riser with control/check/flow/tamper; drains per code",
    "Install piping, hangers/seismic bracing, and sprinkler heads per design criteria",
    "Provide addressable fire alarm panel and communicator; devices, wiring, programming, labeling; acceptance test",
    "Firestop rated penetrations",
    "Hydrostatic and acceptance tests; attend AHJ inspections",
    "Deliver as-builts, O&M manuals, test certificates; owner orientation"
  ],
  "inclusions": [
    "All labor/materials/equipment for sprinkler and fire alarm scope listed",
    "Permit/plan review coordination (fees as allowance)",
    "Hydraulic calcs and shop drawings (up to 3 submittal rounds)",
    "FDC with signage",
    "Testing/inspection coordination",
    "As-builts (PDF/CAD), O&M manuals",
    "One-year workmanship warranty",
    "Spare heads & wrench per NFPA 13"
  ],
  "exclusions": [
    "Hazardous materials, rock/bad soils, dewatering, unforeseen utilities",
    "Structural upgrades; ceiling grid/tiles; patch/paint beyond our saw-cut/patch",
    "Painting of exposed pipe/heads; overtime/expedite fees",
    "Monitoring service after turnover"
  ],
  "clarifications": [
    "Final device/head counts reconcile to approved submittals",
    "Standard working hours unless otherwise noted",
    "Continuous site access required",
    "Flow test current at time of submittal; hydraulics from approved data",
    "Scissor lift assumed; boom if required is additional"
  ],
  "milestones": [
    { "id": "1", "name": "Notice to Proceed", "startWeek": 0, "durationWeeks": 0 },
    { "id": "2", "name": "Submittal Preparation", "startWeek": 1, "durationWeeks": 2 },
    { "id": "3", "name": "AHJ Plan Review", "startWeek": 3, "durationWeeks": 3 },
    { "id": "4", "name": "Material Release", "startWeek": 5, "durationWeeks": 1 },
    { "id": "5", "name": "Mobilization", "startWeek": 6, "durationWeeks": 1 },
    { "id": "6", "name": "Rough-In Installation", "startWeek": 7, "durationWeeks": 2 },
    { "id": "7", "name": "Trim & Heads", "startWeek": 9, "durationWeeks": 1 },
    { "id": "8", "name": "Hydro & Acceptance Tests", "startWeek": 10, "durationWeeks": 1 },
    { "id": "9", "name": "AHJ Final Inspection", "startWeek": 11, "durationWeeks": 1 },
    { "id": "10", "name": "Closeout & Training", "startWeek": 12, "durationWeeks": 1 }
  ],
  "subtotal": 118700,
  "contingencyPct": 10,
  "totalPrice": 118700,
  "paymentType": "milestones",
  "activePaymentKind": "ahj_504010",
  "paymentTerms": "AHJ-Driven 50/40/10: 50% mobilization & material release; 40% at substantial completion; 10% at AHJ sign-off. Alternate 40/40/20 available on request. Billing: Progress apps monthly and/or at milestones; Net 15 from GC approval. 1.5%/mo late. COs require written authorization; allowances & unit prices reconcile to actuals. Permit/plan fees carried as allowance and reconciled to City ledger. ACH/check preferred; credit card +3%. Work may pause after 7 days past due.",
  "phases": [
    { "name": "Mobilization & Material Release", "percentage": 50, "amount": 59350 },
    { "name": "Substantial Completion", "percentage": 40, "amount": 47480 },
    { "name": "AHJ Sign-Off / Final", "percentage": 10, "amount": 11870 }
  ],
  "retainageNote": "Retainage applies only to labor/installed materials (not fees/allowances/taxes); max 5%, reduced to 2.5% at 50% completion. Release at Substantial Completion (AHJ sign-off) less punch list holdback; final release at Final Completion with closeout docs and unconditional lien waivers. Stored materials billed up to 90% with proof of purchase, insurance, and secure storage.",
  "unitRates": [
    "Underground trench/backfill: $[__]/LF (soil), $[__]/LF (asphalt); saw-cut/patch: $[__]/SF.",
    "Alarm device adders (installed): Smokes $175; Pulls $125; Horn-strobes $185; Monitor/Control modules $225.",
    "Permit/inspection allowance reconciles to City hourly schedule."
  ],
  "allowances": [
    "Permit/Plan review fees (City of Phoenix Fire Prevention) – reconcile to ledger"
  ],
  "alternates": [
    { "description": "Add coverage to adjacent suite", "addDeduct": "Add", "amount": 8500 },
    { "description": "Upgrade to concealed heads in public areas", "addDeduct": "Add", "amount": 4200 },
    { "description": "Deduct FDC if provided by others", "addDeduct": "Deduct", "amount": 2800 }
  ],
  "complianceChecklist": [
    { "id": "c1", "label": "Flow test less than 12 months old", "checked": true },
    { "id": "c2", "label": "Water shut-down windows coordinated with building management", "checked": false }
  ],

  // Initial tasks / cost breakdown. These will be editable by the user. Each task should have
  // a description, quantity, and unit price. Feel free to modify or add more tasks.
  "tasks": [
    { "description": "Fire Service & Underground", "quantity": 1, "price": 30000 },
    { "description": "Interior Wet Sprinkler", "quantity": 1, "price": 45000 },
    { "description": "Fire Alarm System", "quantity": 1, "price": 25000 }
  ]
};

// Payment schedules definition
const schedules = {
  "default_404020": { label: "40/40/20", phases: [
    { name: "Mobilization & Material Release", percentage: 40 },
    { name: "Rough-In Completion", percentage: 40 },
    { name: "Acceptance & Turnover", percentage: 20 }
  ]},
  "ahj_504010": { label: "50/40/10 (AHJ)", phases: [
    { name: "Mobilization & Material Release", percentage: 50 },
    { name: "Substantial Completion", percentage: 40 },
    { name: "AHJ Sign-Off / Final", percentage: 10 }
  ]},
  "thirty_6010": { label: "30/60/10", phases: [
    { name: "Mobilization & Material Release", percentage: 30 },
    { name: "Substantial Completion", percentage: 60 },
    { name: "Final", percentage: 10 }
  ]},
  "fifty_3020": { label: "50/30/20", phases: [
    { name: "Mobilization & Material Release", percentage: 50 },
    { name: "Rough-In", percentage: 30 },
    { name: "Final", percentage: 20 }
  ]},
  "monthly_progress": { label: "Monthly Progress", phases: [
    { name: "Progress Billing (Monthly)", percentage: 100 }
  ]},
  "custom": { label: "Custom", phases: [
    { name: "Phase 1", percentage: 50 },
    { name: "Phase 2", percentage: 40 },
    { name: "Phase 3", percentage: 10 }
  ]}
};

// Current data object
let data = JSON.parse(JSON.stringify(defaultData));
let activeKind = data.activePaymentKind || 'ahj_504010';

// Utility to round currency
function roundCurrency(n) {
  return Math.round(n * 100) / 100;
}

// Recompute phases based on schedule and total
function recompute(kind, total) {
  const base = schedules[kind].phases;
  const phases = base.map(p => ({ ...p, amount: roundCurrency(total * (p.percentage / 100)) }));
  const sum = roundCurrency(phases.reduce((t, p) => t + p.amount, 0));
  const delta = roundCurrency(total - sum);
  if (phases.length) {
    phases[phases.length - 1].amount = roundCurrency(phases[phases.length - 1].amount + delta);
  }
  data.phases = phases;
  data.totalPrice = total;
}

// Populate schedule select options
function populateSchedules() {
  const sel = document.getElementById('scheduleSelect');
  sel.innerHTML = '';
  Object.entries(schedules).forEach(([k, v]) => {
    const opt = document.createElement('option');
    opt.value = k;
    opt.textContent = v.label;
    if (k === activeKind) opt.selected = true;
    sel.appendChild(opt);
  });
}

// Update meta section
function updateMeta() {
  const meta = data.meta;
  document.getElementById('companyName').textContent = meta.companyName || 'Cave Fire Protection, LLC';
  document.getElementById('companyInfo').textContent = `${meta.companyWebsite} | ${meta.companyPhone} | ${meta.companyEmail}`;
  const metaSection = document.getElementById('metaSection');
  metaSection.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'meta-grid';
  const addItem = (label, value) => {
    const p = document.createElement('p');
    p.innerHTML = `<strong>${label}:</strong> ${value || ''}`;
    grid.appendChild(p);
  };
  addItem('Prepared for', meta.preparedFor);
  addItem('Project', meta.projectName);
  addItem('Date', meta.date);
  addItem('Proposal #', meta.proposalNumber);
  metaSection.appendChild(grid);
}

// Update UI values from data
function updateUI() {
  // Update meta and header
  updateMeta();

  // Executive summary
  document.getElementById('execSummary').textContent = data.executiveSummary;

  // Side panel inputs
  document.getElementById('subtotalInput').value = data.subtotal || data.totalPrice;
  document.getElementById('contingencyInput').value = data.contingencyPct || 0;
  document.getElementById('totalInput').value = data.totalPrice;
  document.getElementById('termsInput').value = data.paymentTerms || '';
  document.getElementById('retainageInput').value = data.retainageNote || '';
  document.getElementById('unitRatesInput').value = (data.unitRates || []).join('\n');
  document.getElementById('allowancesInput').value = (data.allowances || []).join('\n');

  // Contingency total
  const contingency = roundCurrency((data.subtotal || data.totalPrice) * ((data.contingencyPct || 0) / 100));
  document.getElementById('contingencyTotal').textContent = `$${( (data.subtotal || data.totalPrice) + contingency ).toLocaleString() }`;

  // Totals table
  const totalsTable = document.getElementById('totalsTable');
  totalsTable.innerHTML = '';
  const totalsBody = document.createElement('tbody');
  const addRow = (label, value) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = label;
    const td2 = document.createElement('td');
    td2.textContent = value;
    tr.appendChild(td1);
    tr.appendChild(td2);
    totalsBody.appendChild(tr);
  };
  addRow('Subtotal', `$${(data.subtotal || data.totalPrice).toLocaleString()}`);
  addRow(`Contingency (${data.contingencyPct || 0}%)`, `$${contingency.toLocaleString()}`);
  addRow('Total (with contingency)', `$${((data.subtotal || data.totalPrice) + contingency).toLocaleString()}`);
  totalsTable.appendChild(totalsBody);

  // Phases table
  const phasesTable = document.getElementById('phasesTable');
  phasesTable.innerHTML = '';
  const thead = document.createElement('thead');
  const thRow = document.createElement('tr');
  ['Phase', 'Percent', 'Amount'].forEach(label => {
    const th = document.createElement('th');
    th.textContent = label;
    thRow.appendChild(th);
  });
  thead.appendChild(thRow);
  phasesTable.appendChild(thead);
  const phBody = document.createElement('tbody');
  if (data.phases && data.phases.length) {
    data.phases.forEach(p => {
      const tr = document.createElement('tr');
      const tdName = document.createElement('td');
      tdName.textContent = p.name;
      const tdPerc = document.createElement('td');
      tdPerc.textContent = `${p.percentage}%`;
      const tdAmt = document.createElement('td');
      tdAmt.textContent = `$${p.amount.toLocaleString()}`;
      tr.appendChild(tdName);
      tr.appendChild(tdPerc);
      tr.appendChild(tdAmt);
      phBody.appendChild(tr);
    });
  }
  phasesTable.appendChild(phBody);

  // Display terms & retainage
  document.getElementById('termsDisplay').textContent = data.paymentTerms || '';
  document.getElementById('retainageDisplay').textContent = data.retainageNote ? `Retainage: ${data.retainageNote}` : '';

  // Unit Rates & allowances lists
  const urSection = document.getElementById('unitRatesSection');
  urSection.innerHTML = '';
  if (data.unitRates && data.unitRates.length) {
    const h = document.createElement('h2'); h.textContent = 'Unit Rates';
    urSection.appendChild(h);
    const ul = document.createElement('ul');
    data.unitRates.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    urSection.appendChild(ul);
  }

  const alSection = document.getElementById('allowancesSection');
  alSection.innerHTML = '';
  if (data.allowances && data.allowances.length) {
    const h = document.createElement('h2'); h.textContent = 'Allowances';
    alSection.appendChild(h);
    const ul = document.createElement('ul');
    data.allowances.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    alSection.appendChild(ul);
  }

  // Alternates section
  const altSection = document.getElementById('alternatesSection');
  altSection.innerHTML = '';
  if (data.alternates && data.alternates.length) {
    const h = document.createElement('h2'); h.textContent = 'Alternates';
    altSection.appendChild(h);
    const table = document.createElement('table');
    const thr = document.createElement('tr');
    ['Description', 'Add/Deduct', 'Amount'].forEach(lbl => {
      const th = document.createElement('th'); th.textContent = lbl; thr.appendChild(th);
    });
    table.appendChild(thr);
    data.alternates.forEach(a => {
      const tr = document.createElement('tr');
      const tdDesc = document.createElement('td'); tdDesc.textContent = a.description;
      const tdKind = document.createElement('td'); tdKind.textContent = a.addDeduct;
      const tdAmt = document.createElement('td'); tdAmt.textContent = `$${a.amount.toLocaleString()}`;
      tr.appendChild(tdDesc);
      tr.appendChild(tdKind);
      tr.appendChild(tdAmt);
      table.appendChild(tr);
    });
    altSection.appendChild(table);
  }

  // Checklist section
  const checklistSection = document.getElementById('checklistSection');
  checklistSection.innerHTML = '';
  if (data.complianceChecklist && data.complianceChecklist.length) {
    const h = document.createElement('h2'); h.textContent = 'Compliance Checklist';
    checklistSection.appendChild(h);
    const ul = document.createElement('ul');
    data.complianceChecklist.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.label;
      if (item.checked) {
        li.style.textDecoration = 'line-through';
        li.style.color = '#888';
      }
      ul.appendChild(li);
    });
    checklistSection.appendChild(ul);
  }

  // Scope of work
  const scopeSection = document.getElementById('scopeSection');
  scopeSection.innerHTML = '';
  if (data.scopeOfWork && data.scopeOfWork.length) {
    const h = document.createElement('h2'); h.textContent = 'Scope of Work';
    scopeSection.appendChild(h);
    const ul = document.createElement('ul');
    data.scopeOfWork.forEach(item => {
      const li = document.createElement('li'); li.textContent = item; ul.appendChild(li);
    });
    scopeSection.appendChild(ul);
  }

  // Inclusions
  const incSection = document.getElementById('inclusionsSection');
  incSection.innerHTML = '';
  if (data.inclusions && data.inclusions.length) {
    const h = document.createElement('h2'); h.textContent = 'Inclusions';
    incSection.appendChild(h);
    const ul = document.createElement('ul');
    data.inclusions.forEach(item => {
      const li = document.createElement('li'); li.textContent = item; ul.appendChild(li);
    });
    incSection.appendChild(ul);
  }

  // Exclusions
  const excSection = document.getElementById('exclusionsSection');
  excSection.innerHTML = '';
  if (data.exclusions && data.exclusions.length) {
    const h = document.createElement('h2'); h.textContent = 'Exclusions';
    excSection.appendChild(h);
    const ul = document.createElement('ul');
    data.exclusions.forEach(item => {
      const li = document.createElement('li'); li.textContent = item; ul.appendChild(li);
    });
    excSection.appendChild(ul);
  }

  // Clarifications
  const clarSection = document.getElementById('clarificationsSection');
  clarSection.innerHTML = '';
  if (data.clarifications && data.clarifications.length) {
    const h = document.createElement('h2'); h.textContent = 'Clarifications';
    clarSection.appendChild(h);
    const ul = document.createElement('ul');
    data.clarifications.forEach(item => {
      const li = document.createElement('li'); li.textContent = item; ul.appendChild(li);
    });
    clarSection.appendChild(ul);
  }

  // Render tasks table and update amounts
  if (typeof renderTasks === 'function') {
    renderTasks();
  }
}

// Event listeners for form inputs
function setupEventListeners() {
  // Payment schedule change
  document.getElementById('scheduleSelect').addEventListener('change', (e) => {
    activeKind = e.target.value;
    data.activePaymentKind = activeKind;
    recompute(activeKind, data.totalPrice);
    updateUI();
  });

  // Subtotal change
  document.getElementById('subtotalInput').addEventListener('input', (e) => {
    const value = parseFloat(e.target.value) || 0;
    data.subtotal = value;
    // Recalculate contingency total display only; totalPrice remains unchanged until user modifies contract total.
    updateUI();
  });

  // Contingency percent change
  document.getElementById('contingencyInput').addEventListener('input', (e) => {
    const value = parseFloat(e.target.value) || 0;
    data.contingencyPct = value;
    updateUI();
  });

  // Contract total change
  document.getElementById('totalInput').addEventListener('input', (e) => {
    const value = parseFloat(e.target.value) || 0;
    data.totalPrice = value;
    recompute(activeKind, value);
    updateUI();
  });

  // Payment terms
  document.getElementById('termsInput').addEventListener('input', (e) => {
    data.paymentTerms = e.target.value;
    updateUI();
  });
  // Retainage
  document.getElementById('retainageInput').addEventListener('input', (e) => {
    data.retainageNote = e.target.value;
    updateUI();
  });
  // Unit rates
  document.getElementById('unitRatesInput').addEventListener('input', (e) => {
    const lines = e.target.value.split(/\n+/).filter(x => x.trim());
    data.unitRates = lines;
    updateUI();
  });
  // Allowances
  document.getElementById('allowancesInput').addEventListener('input', (e) => {
    const lines = e.target.value.split(/\n+/).filter(x => x.trim());
    data.allowances = lines;
    updateUI();
  });

  // Export JSON
  document.getElementById('exportBtn').addEventListener('click', () => {
    const str = JSON.stringify(data, null, 2);
    const blob = new Blob([str], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `proposal-${data.meta.proposalNumber || 'cave'}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  // Import JSON
  document.getElementById('importFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        data = JSON.parse(reader.result);
        activeKind = data.activePaymentKind || activeKind;
        recompute(activeKind, data.totalPrice);
        updateUI();
      } catch (err) {
        alert('Invalid JSON file');
      }
    };
    reader.readAsText(file);
    // Reset the input value so the same file can be selected again
    e.target.value = '';
  });

  // Print / download PDF (via browser print)
  document.getElementById('printBtn').addEventListener('click', () => {
    window.print();
  });

  // Appearance: accent color
  const accentInput = document.getElementById('accentColorInput');
  if (accentInput) {
    accentInput.addEventListener('input', (e) => {
      const val = e.target.value;
      document.documentElement.style.setProperty('--primary-color', val);
    });
  }

  // Appearance: font family
  const fontSelect = document.getElementById('fontSelect');
  if (fontSelect) {
    fontSelect.addEventListener('change', (e) => {
      const font = e.target.value;
      document.body.style.fontFamily = `'${font}', sans-serif`;
    });
  }

  // Add Task button
  const addTaskBtn = document.getElementById('addTaskBtn');
  if (addTaskBtn) {
    addTaskBtn.addEventListener('click', () => {
      // Add a blank task
      if (!data.tasks) data.tasks = [];
      data.tasks.push({ description: 'New Task', quantity: 1, price: 0 });
      updateSubtotalFromTasks();
      renderTasks();
    });
  }
}

// Compute subtotal from tasks and update data totals
function updateSubtotalFromTasks() {
  if (!Array.isArray(data.tasks)) return;
  let sub = 0;
  data.tasks.forEach(task => {
    const qty = parseFloat(task.quantity) || 0;
    const price = parseFloat(task.price) || 0;
    sub += qty * price;
  });
  // Update subtotal and totalPrice to match tasks sum
  data.subtotal = roundCurrency(sub);
  data.totalPrice = roundCurrency(sub);
  recompute(activeKind, data.totalPrice);
  // Update the UI after recalculating subtotal and phases
  updateUI();
}

// Render the editable tasks table
function renderTasks() {
  const table = document.getElementById('tasksTable');
  if (!table) return;
  // Clear current contents
  table.innerHTML = '';
  // Header row
  const header = document.createElement('tr');
  ['Description', 'Qty', 'Price', 'Amount', ''].forEach(lbl => {
    const th = document.createElement('th');
    th.textContent = lbl;
    header.appendChild(th);
  });
  table.appendChild(header);
  if (!Array.isArray(data.tasks)) data.tasks = [];
  data.tasks.forEach((task, idx) => {
    const tr = document.createElement('tr');
    // Description
    const descTd = document.createElement('td');
    const descInput = document.createElement('input');
    descInput.type = 'text';
    descInput.value = task.description || '';
    descInput.addEventListener('input', (e) => {
      data.tasks[idx].description = e.target.value;
    });
    descTd.appendChild(descInput);
    // Quantity
    const qtyTd = document.createElement('td');
    const qtyInput = document.createElement('input');
    qtyInput.type = 'number';
    qtyInput.min = '0';
    qtyInput.step = 'any';
    qtyInput.value = task.quantity;
    qtyInput.addEventListener('input', (e) => {
      data.tasks[idx].quantity = parseFloat(e.target.value) || 0;
      updateSubtotalFromTasks();
      // Rerender to update amount column
      renderTasks();
    });
    qtyTd.appendChild(qtyInput);
    // Price
    const priceTd = document.createElement('td');
    const priceInput = document.createElement('input');
    priceInput.type = 'number';
    priceInput.min = '0';
    priceInput.step = 'any';
    priceInput.value = task.price;
    priceInput.addEventListener('input', (e) => {
      data.tasks[idx].price = parseFloat(e.target.value) || 0;
      updateSubtotalFromTasks();
      renderTasks();
    });
    priceTd.appendChild(priceInput);
    // Amount
    const amountTd = document.createElement('td');
    const amt = (parseFloat(task.quantity) || 0) * (parseFloat(task.price) || 0);
    amountTd.textContent = `$${roundCurrency(amt).toLocaleString()}`;
    // Remove button
    const rmTd = document.createElement('td');
    const rmBtn = document.createElement('button');
    rmBtn.textContent = 'Remove';
    rmBtn.addEventListener('click', () => {
      data.tasks.splice(idx, 1);
      updateSubtotalFromTasks();
      renderTasks();
    });
    rmTd.appendChild(rmBtn);
    // Append tds to row
    tr.appendChild(descTd);
    tr.appendChild(qtyTd);
    tr.appendChild(priceTd);
    tr.appendChild(amountTd);
    tr.appendChild(rmTd);
    table.appendChild(tr);
  });
}

// Initialize everything on load
window.addEventListener('DOMContentLoaded', () => {
  populateSchedules();
  recompute(activeKind, data.totalPrice);
  setupEventListeners();
  updateUI();
});
