// Multi-car maintenance schedule system
// -------------------------------------------------
// Structure explanation:
//
// schedules: object containing schedule data for each car
//   Each car has:
//   - items: array of maintenance items with id, name, and defaultAction
//   - columns: array of mileage intervals with date and cells mapping
//
// The user selects a car from a dropdown, and the app uses that car's schedule.

const schedules = {
  is300: {
    name: 'Lexus IS300',
    items: [
      // Replace items
      { id: 'engine_oil', name: 'Engine Oil', defaultAction: 'replace' },
      { id: 'oil_filter', name: 'Oil Filter', defaultAction: 'replace' },
      { id: 'cabin_air_filter', name: 'Cabin Air Filter', defaultAction: 'replace' },
      { id: 'smart_key_battery', name: 'Smart Key Battery', defaultAction: 'replace' },
      { id: 'brake_fluids', name: 'Brake Fluids', defaultAction: 'replace' },
      { id: 'engine_air_filter', name: 'Engine Air Filter', defaultAction: 'replace' },
      { id: 'spark_plugs', name: 'Spark Plugs', defaultAction: 'replace' },
      
      // Inspect items
      { id: 'fluids', name: 'Fluids (Brakes, Coolant)', defaultAction: 'inspect' },
      { id: 'axle_shaft_boots', name: 'Axle Shaft Boots', defaultAction: 'inspect' },
      { id: 'body', name: 'Body', defaultAction: 'inspect' },
      { id: 'ball_joints', name: 'Ball Joints / Dust Covers', defaultAction: 'inspect' },
      { id: 'brakes', name: 'Brakes Pads, Calipers, Rotors', defaultAction: 'inspect' },
      { id: 'brake_lines', name: 'Brake Lines & Hoses', defaultAction: 'inspect' },
      { id: 'brake_rotor', name: 'Brake Rotor Thickness & Runout', defaultAction: 'inspect' },
      { id: 'drive_belt', name: 'Drive Belt', defaultAction: 'inspect' },
      { id: 'engine_coolant', name: 'Engine Coolant', defaultAction: 'inspect' },
      { id: 'exhaust', name: 'Exhaust Pipes & Mounting', defaultAction: 'inspect' },
      { id: 'fuel_tank_gasket', name: 'Fuel Tank Gasket', defaultAction: 'inspect' },
      { id: 'fuel_lines', name: 'Fuel Lines Connection and System Hoses', defaultAction: 'inspect' },
      { id: 'intercooler', name: 'Intercooler Coolant', defaultAction: 'inspect' },
      { id: 'rack_pinion', name: 'Rack-and Pinion Assembly', defaultAction: 'inspect' },
      { id: 'rear_diff', name: 'Rear Differential Oil', defaultAction: 'inspect' },
      { id: 'steering_linkage', name: 'Steering Linkage & Boots', defaultAction: 'inspect' },
      { id: 'transmission_leak', name: 'Transmission For Leakage', defaultAction: 'inspect' },
      { id: 'transmission_hoses', name: 'Transmission Fluid Cooler Hoses & Connections', defaultAction: 'inspect' },
      { id: 'wiper_blades', name: 'Wiper Blades', defaultAction: 'inspect' },
      { id: 'tires', name: 'Tires', defaultAction: 'inspect' },
      
      // Tighten items
      { id: 'nuts_bolts', name: 'Nuts and Bolts on Chasis', defaultAction: 'tighten' },
      
      // Test items
      { id: 'road_test', name: 'Car on the road', defaultAction: 'test' },
      
      // Reset items
      { id: 'oil_reminder', name: 'Oil Maintenance Reminder', defaultAction: 'reset' },
      { id: 'maintenance_reminder', name: 'Scheduled Maintenance Reminder', defaultAction: 'reset' }
    ],

  // Columns based on your Lexus IS300 maintenance schedule
  columns: [
    { 
      mileage: 8000, 
      date: 'Aug 5, 22', 
      cells: { 
        fluids: 'Y', brakes: 'Y', wiper_blades: 'Y', tires: 'Y', road_test: 'Y'
      } 
    },
    { 
      mileage: 16000, 
      date: 'Feb 1, 23', 
      cells: { 
        engine_oil: 'Y', oil_filter: 'Y', cabin_air_filter: 'Y', brakes: 'Y', 
        wiper_blades: 'Y', tires: 'Y', road_test: 'Y', oil_reminder: 'Y', 
        maintenance_reminder: 'Y'
      } 
    },
    { 
      mileage: 24000, 
      date: 'Jul 31, 23', 
      cells: { 
        fluids: 'Y', axle_shaft_boots: 'Y', body: 'Y', ball_joints: 'Y', brakes: 'Y',
        brake_lines: 'Y', engine_coolant: 'Y', exhaust: 'Y', intercooler: 'Y',
        rack_pinion: 'Y', rear_diff: 'Y', steering_linkage: 'Y', smart_key_battery: 'Y',
        wiper_blades: 'Y', tires: 'Y', road_test: 'Y'
      } 
    },
    { 
      mileage: 32000, 
      date: 'Jan 27, 24', 
      cells: { 
        engine_oil: 'Y', oil_filter: 'Y', cabin_air_filter: 'Y', brakes: 'Y',
        wiper_blades: 'Y', tires: 'Y', road_test: 'Y', oil_reminder: 'Y',
        maintenance_reminder: 'Y'
      } 
    },
    { 
      mileage: 40000, 
      date: 'Jul 25, 24', 
      cells: { 
        fluids: 'Y', brakes: 'Y', wiper_blades: 'Y', tires: 'Y', road_test: 'Y'
      } 
    },
    { 
      mileage: 48000, 
      date: 'Jan 21, 25', 
      cells: { 
        engine_oil: 'Y', oil_filter: 'Y', cabin_air_filter: 'Y', smart_key_battery: 'Y',
        axle_shaft_boots: 'Y', body: 'Y', ball_joints: 'Y', brake_lines: 'Y',
        brake_rotor: 'Y', engine_coolant: 'Y', exhaust: 'Y', fuel_tank_gasket: 'Y',
        fuel_lines: 'Y', intercooler: 'Y', rack_pinion: 'Y', rear_diff: 'Y',
        steering_linkage: 'Y', transmission_leak: 'Y', transmission_hoses: 'Y',
        wiper_blades: 'Y', tires: 'Y', oil_reminder: 'Y'
      } 
    },
    { 
      mileage: 51000, 
      date: 'Jul 20, 25', 
      cells: { 
        engine_oil: 'Y', oil_filter: 'Y', cabin_air_filter: 'Y', smart_key_battery: 'Y',
        brake_fluids: 'Y', engine_air_filter: 'Y', fluids: 'Y', brakes: 'Y',
        wiper_blades: 'Y', tires: 'Y', road_test: 'Y', oil_reminder: 'Y',
        maintenance_reminder: 'Y'
      } 
    },
    { 
      mileage: 59000, 
      date: 'Jan 16, 26', 
      cells: { 
        engine_oil: 'Y', oil_filter: 'Y', cabin_air_filter: 'Y', spark_plugs: 'Y',
        brakes: 'Y', wiper_blades: 'Y', tires: 'Y', road_test: 'Y', oil_reminder: 'Y'
      } 
    },
    { 
      mileage: 67000, 
      date: 'Jul 15, 26', 
      cells: { 
        axle_shaft_boots: 'Y', body: 'Y', ball_joints: 'Y', brakes: 'Y',
        brake_lines: 'Y', engine_coolant: 'Y', exhaust: 'Y', intercooler: 'Y',
        rack_pinion: 'Y', steering_linkage: 'Y', wiper_blades: 'Y', tires: 'Y',
        road_test: 'Y', maintenance_reminder: 'Y'
      } 
    },
    { 
      mileage: 75000, 
      date: 'Jan 11, 27', 
      cells: { 
        engine_oil: 'Y', oil_filter: 'Y', fluids: 'Y', brakes: 'Y', wiper_blades: 'Y',
        tires: 'Y', road_test: 'Y', oil_reminder: 'Y', maintenance_reminder: 'Y'
      } 
    },
    { 
      mileage: 83000, 
      date: 'Jul 10, 27', 
      cells: { 
        cabin_air_filter: 'Y', brakes: 'Y', wiper_blades: 'Y', tires: 'Y'
      } 
    },
    { 
      mileage: 91000, 
      date: 'Jan 6, 28', 
      cells: { 
        engine_oil: 'Y', oil_filter: 'Y', cabin_air_filter: 'Y', smart_key_battery: 'Y',
        brake_fluids: 'Y', engine_air_filter: 'Y', axle_shaft_boots: 'Y', body: 'Y',
        ball_joints: 'Y', brake_lines: 'Y', brake_rotor: 'Y', drive_belt: 'Y',
        engine_coolant: 'Y', exhaust: 'Y', fuel_tank_gasket: 'Y', fuel_lines: 'Y',
        intercooler: 'Y', transmission_leak: 'Y', transmission_hoses: 'Y',
        wiper_blades: 'Y', tires: 'Y', oil_reminder: 'Y'
      } 
    },
    { 
      mileage: 99000, 
      date: 'Jul 4, 28', 
      cells: { 
        fluids: 'Y', brakes: 'Y', wiper_blades: 'Y', tires: 'Y', road_test: 'Y'
      } 
    },
    { 
      mileage: 107000, 
      date: 'Dec 31, 28', 
      cells: { 
        engine_oil: 'Y', oil_filter: 'Y', spark_plugs: 'Y', brakes: 'Y',
        wiper_blades: 'Y', tires: 'Y', road_test: 'Y', oil_reminder: 'Y'
      } 
    },
    { 
      mileage: 115000, 
      date: 'Jun 29, 29', 
      cells: { 
        fluids: 'Y', axle_shaft_boots: 'Y', body: 'Y', ball_joints: 'Y', brakes: 'Y',
        brake_lines: 'Y', engine_coolant: 'Y', exhaust: 'Y', intercooler: 'Y',
        rear_diff: 'Y', steering_linkage: 'Y', smart_key_battery: 'Y',
        wiper_blades: 'Y', tires: 'Y', road_test: 'Y'
      } 
    },
    { 
      mileage: 123000, 
      date: 'Dec 26, 29', 
      cells: { 
        engine_oil: 'Y', oil_filter: 'Y', cabin_air_filter: 'Y', brakes: 'Y',
        drive_belt: 'Y', wiper_blades: 'Y', tires: 'Y', road_test: 'Y',
        oil_reminder: 'Y', maintenance_reminder: 'Y'
      } 
    },
    { 
      mileage: 131000, 
      date: 'Jun 24, 30', 
      cells: { 
        cabin_air_filter: 'Y', brakes: 'Y', wiper_blades: 'Y', tires: 'Y',
        road_test: 'Y', maintenance_reminder: 'Y'
      } 
    },
    { 
      mileage: 139000, 
      date: 'Dec 21, 30', 
      cells: { 
        engine_oil: 'Y', oil_filter: 'Y', cabin_air_filter: 'Y', smart_key_battery: 'Y',
        brake_fluids: 'Y', engine_air_filter: 'Y', axle_shaft_boots: 'Y', body: 'Y',
        ball_joints: 'Y', brake_lines: 'Y', brake_rotor: 'Y', drive_belt: 'Y',
        engine_coolant: 'Y', exhaust: 'Y', fuel_tank_gasket: 'Y', fuel_lines: 'Y',
        rack_pinion: 'Y', rear_diff: 'Y', steering_linkage: 'Y', transmission_leak: 'Y',
        wiper_blades: 'Y', tires: 'Y', oil_reminder: 'Y'
      } 
    }
  ]
  },

  ativa: {
    name: 'Perodua Ativa',
    items: [
      { id: 'engine_oil', name: 'Engine Oil - 0W20 3.5L', defaultAction: 'replace' },
      { id: 'oil_filter', name: 'Oil Filter', defaultAction: 'replace' },
      { id: 'drain_plug_engine', name: 'Drain Plug Gasket - Engine Oil', defaultAction: 'replace' },
      { id: 'drain_plug_cvt', name: 'Drain Plug Gasket - CVT', defaultAction: 'replace' },
      { id: 'cabin_air_filter', name: 'Cabin Air Filter', defaultAction: 'replace' },
      { id: 'smart_key_battery', name: 'Smart Key Battery', defaultAction: 'replace' },
      { id: 'brake_fluids', name: 'Brake Fluids 0.5L', defaultAction: 'replace' },
      { id: 'engine_air_filter', name: 'Engine Air Filter', defaultAction: 'replace' },
      { id: 'spark_plugs', name: 'Spark Plugs', defaultAction: 'replace' },
      { id: 'transmission_fluid', name: 'Transmission Fluid', defaultAction: 'replace' },
      { id: 'radiator_coolant', name: 'Radiator Coolant - 2L', defaultAction: 'replace' },
      { id: 'wiper_blades', name: 'Wiper Blades', defaultAction: 'inspect' },
      { id: 'tires', name: 'Tires', defaultAction: 'inspect' }
    ],

    columns: [
      { 
        mileage: 17000, 
        date: 'Aug 20,25', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', cabin_air_filter: 'Y',
          engine_air_filter: 'Y', wiper_blades: 'Y', tires: 'Y'
        } 
      },
      { 
        mileage: 25000, 
        date: 'Feb 16,26', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', wiper_blades: 'Y', tires: 'Y'
        } 
      },
      { 
        mileage: 33000, 
        date: 'Aug 15,26', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', cabin_air_filter: 'Y',
          brake_fluids: 'Y', engine_air_filter: 'Y', radiator_coolant: 'Y', 
          wiper_blades: 'Y', tires: 'Y'
        } 
      },
      { 
        mileage: 41000, 
        date: 'Feb 11,27', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', wiper_blades: 'Y', tires: 'Y'
        } 
      },
      { 
        mileage: 49000, 
        date: 'Aug 10,27', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', cabin_air_filter: 'Y',
          wiper_blades: 'Y', tires: 'Y'
        } 
      },
      { 
        mileage: 57000, 
        date: 'Feb 6,28', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', wiper_blades: 'Y', tires: 'Y'
        } 
      },
      { 
        mileage: 65000, 
        date: 'Aug 4,28', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', cabin_air_filter: 'Y',
          brake_fluids: 'Y', engine_air_filter: 'Y', radiator_coolant: 'Y',
          wiper_blades: 'Y', tires: 'Y'
        } 
      },
      { 
        mileage: 73000, 
        date: 'Jan 31,29', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', wiper_blades: 'Y', tires: 'Y'
        } 
      },
      { 
        mileage: 81000, 
        date: 'Jul 30,29', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', cabin_air_filter: 'Y',
          engine_air_filter: 'Y', wiper_blades: 'Y', tires: 'Y'
        } 
      },
      { 
        mileage: 89000, 
        date: 'Jan 26,30', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', drain_plug_cvt: 'Y',
          wiper_blades: 'Y', tires: 'Y'
        } 
      },
      { 
        mileage: 97000, 
        date: 'Jul 25,30', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', cabin_air_filter: 'Y',
          engine_air_filter: 'Y', wiper_blades: 'Y', tires: 'Y'
        } 
      },
      { 
        mileage: 105000, 
        date: 'Jan 21,31', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', wiper_blades: 'Y', tires: 'Y'
        } 
      },
      { 
        mileage: 113000, 
        date: 'Jul 20,31', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', cabin_air_filter: 'Y',
          brake_fluids: 'Y', engine_air_filter: 'Y', radiator_coolant: 'Y',
          wiper_blades: 'Y', tires: 'Y'
        } 
      },
      { 
        mileage: 121000, 
        date: 'Jan 16,32', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', wiper_blades: 'Y', tires: 'Y'
        } 
      },
      { 
        mileage: 129000, 
        date: 'Jul 14,32', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', cabin_air_filter: 'Y',
          wiper_blades: 'Y', tires: 'Y'
        } 
      },
      { 
        mileage: 137000, 
        date: 'Jan 10,33', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', wiper_blades: 'Y', tires: 'Y'
        } 
      },
      { 
        mileage: 145000, 
        date: 'Jul 9,33', 
        cells: { 
          engine_oil: 'Y', oil_filter: 'Y', drain_plug_engine: 'Y', cabin_air_filter: 'Y',
          brake_fluids: 'Y', engine_air_filter: 'Y', radiator_coolant: 'Y',
          wiper_blades: 'Y', tires: 'Y'
        } 
      }
    ]
  }
};

// -------------------------------------------------
// Example: Converting your PDF table to the schedule object
// -------------------------------------------------
// Suppose your PDF has a table like this:
//
// | Action   | Serviceable Item           | 8,000 km | 16,000 km | 24,000 km | 32,000 km |
// |----------|----------------------------|----------|-----------|-----------|-----------|
// | Replace  | Engine oil and oil filter  |    ✓     |     ✓     |     ✓     |     ✓     |
// | Replace  | Air cleaner filter         |          |     ✓     |           |           |
// | Replace  | Spark plugs                |          |           |           |     ✓     |
// | Inspect  | Brake pads                 |          |     ✓     |           |           |
// | Inspect  | Tire rotation              |          |     ✓     |           |           |
// | Tighten  | Suspension bolts           |          |           |     ✓     |           |
// | Reset    | Maintenance light          |    ✓     |     ✓     |     ✓     |     ✓     |
//
// Step 1: For each row, create an item object with id, name, and defaultAction.
//   - Use a short unique id (e.g., 'engine_oil')
//   - Use the full name from "Serviceable Item" (e.g., 'Engine oil and oil filter')
//   - Use the "Action" column value as defaultAction (e.g., 'replace', 'inspect', 'tighten', 'reset')
//
// Step 2: For each mileage column where there's a ✓ or 'Y', add an entry in that column's cells.
//   - The cells object maps item id -> action string
//   - Example: { mileage: 8000, cells: { engine_oil: 'replace', maintenance_light: 'reset' } }
//   - You can use the action from the PDF's "Action" column, or use 'Y' to use the defaultAction
//
// Step 3: Add optional date field to each column if your PDF has time-based intervals.
//
// Result: The schedule object above shows this structure with multiple action types.

// -------------------------------------------------
// Date calculation utility
// calculateExpectedDate(currentMileage, nextMileage) => Date string
// - Calculates expected service date based on rate: 8000 km = 6 months
// - Assumes current mileage was driven today

function calculateExpectedDate(currentMileage, nextMileage) {
  const kmDifference = nextMileage - currentMileage;
  const monthsToNext = (kmDifference / 8000) * 6; // 8000 km = 6 months
  
  const today = new Date();
  const expectedDate = new Date(today);
  expectedDate.setMonth(expectedDate.getMonth() + Math.round(monthsToNext));
  
  // Format as "MMM DD, YYYY"
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return expectedDate.toLocaleDateString('en-US', options);
}

// -------------------------------------------------
// Calculation logic
// findNextMaintenance(currentMileage, carKey) => { column, actionGroups: { replace:[], inspect:[], ... }, expectedDate }
// - Finds the next schedule column with mileage > currentMileage for the selected car.
// - Calculates expected date based on rate: 8000 km = 6 months from today.
// - If found, returns the column and items grouped by action type.
// - If no next mileage is found, returns null for column and empty action groups.

function findNextMaintenance(currentMileage, carKey) {
  if (typeof currentMileage !== 'number' || Number.isNaN(currentMileage)) {
    throw new Error('currentMileage must be a number');
  }

  const schedule = schedules[carKey];
  if (!schedule) {
    throw new Error(`Unknown car: ${carKey}`);
  }

  // Make a copy and keep only columns that have numeric mileage
  const withMileage = schedule.columns
    .filter(c => c.mileage != null && !Number.isNaN(Number(c.mileage)))
    .map(c => ({ ...c, mileage: Number(c.mileage) }))
    .sort((a, b) => a.mileage - b.mileage);

  // Find first column with mileage > currentMileage
  const next = withMileage.find(c => c.mileage > currentMileage) || null;

  if (!next) {
    return { column: null, actionGroups: {}, expectedDate: null };
  }

  // Calculate expected date based on current mileage and next mileage
  const expectedDate = calculateExpectedDate(currentMileage, next.mileage);

  const actionGroups = {};

  // For each item, check whether the column.cells has an action for it
  for (const item of schedule.items) {
    const cellValue = next.cells && next.cells[item.id];
    if (!cellValue) continue; // no action at this column

    // Determine the action type:
    // - If cellValue is a string (e.g., 'replace', 'inspect'), use it
    // - If cellValue is 'Y' or true, use the item's defaultAction
    let action = item.defaultAction || 'inspect';
    if (typeof cellValue === 'string' && cellValue !== 'Y') {
      action = cellValue.toLowerCase();
    }

    // Add to the appropriate action group
    if (!actionGroups[action]) {
      actionGroups[action] = [];
    }
    actionGroups[action].push(item.name);
  }

  return { column: next, actionGroups, expectedDate };
}

// -------------------------------------------------
// UI wiring
document.addEventListener('DOMContentLoaded', () => {
  const carSelect = document.getElementById('carSelect');
  const mileageInput = document.getElementById('mileage');
  const calcBtn = document.getElementById('calcBtn');
  const resultSection = document.getElementById('result');
  const nextMileageEl = document.getElementById('nextMileage');
  const nextDateEl = document.getElementById('nextDate');

  function renderResult(res, currentMileage) {
    // Clear previous results
    const colsContainer = document.querySelector('.cols');
    colsContainer.innerHTML = '';

    if (!res || !res.column) {
      resultSection.classList.remove('hidden');
      nextMileageEl.textContent = 'No future scheduled maintenance found';
      nextDateEl.textContent = '—';
      return;
    }

    resultSection.classList.remove('hidden');
    nextMileageEl.textContent = res.column.mileage;
    nextDateEl.textContent = res.expectedDate || '—';

    // Get all action types and sort them (replace first, then alphabetically)
    const actionTypes = Object.keys(res.actionGroups).sort((a, b) => {
      if (a === 'replace') return -1;
      if (b === 'replace') return 1;
      return a.localeCompare(b);
    });

    if (actionTypes.length === 0) {
      const col = document.createElement('div');
      col.className = 'col';
      col.innerHTML = '<h3>No items scheduled</h3><ul class="list"><li>None</li></ul>';
      colsContainer.appendChild(col);
      return;
    }

    // Create a column for each action type
    for (const action of actionTypes) {
      const col = document.createElement('div');
      col.className = 'col';
      
      const heading = document.createElement('h3');
      heading.textContent = `Items to ${action}`;
      col.appendChild(heading);

      const list = document.createElement('ul');
      list.className = 'list';

      const items = res.actionGroups[action];
      if (items.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'None';
        list.appendChild(li);
      } else {
        for (const name of items) {
          const li = document.createElement('li');
          li.textContent = name;
          list.appendChild(li);
        }
      }

      col.appendChild(list);
      colsContainer.appendChild(col);
    }
  }

  calcBtn.addEventListener('click', () => {
    const raw = mileageInput.value;
    const carKey = carSelect.value;
    
    if (raw === '') {
      alert('Please enter your current mileage');
      return;
    }
    const cur = Number(raw);
    if (Number.isNaN(cur) || cur < 0) {
      alert('Please enter a valid non-negative number for mileage');
      return;
    }

    const res = findNextMaintenance(cur, carKey);
    renderResult(res, cur);
  });

  // Optional: allow Enter to trigger calculation
  mileageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') calcBtn.click();
  });

  // Run simple self-tests to verify mileage logic (logs to console).
  // These tests are lightweight checks you can remove later.
  function runSelfTests() {
    try {
      console.log('Self-tests: starting');

      // Test IS300
      const t1 = findNextMaintenance(0, 'is300');
      console.assert(t1.column && t1.column.mileage === 8000, 'Test1 IS300 failed: expected 8000');

      const t2 = findNextMaintenance(10000, 'is300');
      console.assert(t2.column && t2.column.mileage === 16000, 'Test2 IS300 failed: expected 16000');

      // Test Ativa
      const t3 = findNextMaintenance(0, 'ativa');
      console.assert(t3.column && t3.column.mileage === 17000, 'Test3 Ativa failed: expected 17000');

      const t4 = findNextMaintenance(20000, 'ativa');
      console.assert(t4.column && t4.column.mileage === 25000, 'Test4 Ativa failed: expected 25000');

      // Test beyond last interval
      const t5 = findNextMaintenance(1000000, 'is300');
      console.assert(t5.column === null, 'Test5 failed: expected null column');

      console.log('Self-tests: completed (see assertions).');
    } catch (err) {
      console.error('Self-tests error', err);
    }
  }

  runSelfTests();
});
