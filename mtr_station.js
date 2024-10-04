document.addEventListener("DOMContentLoaded", function () {
  const allLine = {
    KTL: {
      text: "觀塘線",
      color: "#7ed957",
      sta: [
        { code: "WHA", name: "Whampoa" },
        { code: "HOM", name: "Ho Man Tin" },
        { code: "YMT", name: "Yau Ma Tei" },
        { code: "MOK", name: "Mong Kok" },
        { code: "PRE", name: "Prince Edward" },
        { code: "SKM", name: "Shek Kip Mei" },
        { code: "KOT", name: "Kowloon Tong" },
        { code: "LOF", name: "Lok Fu" },
        { code: "WTS", name: "Wong Tai Sin" },
        { code: "DIH", name: "Diamond Hill" },
        { code: "CHH", name: "Choi Hung" },
        { code: "KOB", name: "Kowloon Bay" },
        { code: "NTK", name: "Ngau Tau Kok" },
        { code: "KWT", name: "Kwun Tong" },
        { code: "LAT", name: "Lam Tin" },
        { code: "YAT", name: "Yau Tong" },
        { code: "TIK", name: "Tiu Keng Leng" },
      ],
    },
    ISL: {
      text: "港島線",
      color: "#004aad",
      sta: [
        { code: "KET", name: "Kennedy Town" },
        { code: "HKU", name: "HKU" },
        { code: "SYP", name: "Sai Ying Pun" },
        { code: "SHW", name: "Sheung Wan" },
        { code: "CEN", name: "Central" },
        { code: "ADM", name: "Admiralty" },
        { code: "WAC", name: "Wan Chai" },
        { code: "CAB", name: "Causeway Bay" },
        { code: "TIH", name: "Tin Hau" },
        { code: "FOH", name: "Fortress Hill" },
        { code: "NOP", name: "North Point" },
        { code: "QUB", name: "Quarry Bay" },
        { code: "TAK", name: "Tai Koo" },
        { code: "SWH", name: "Sai Wan Ho" },
        { code: "SKW", name: "Shau Kei Wan" },
        { code: "HFC", name: "Heng Fa Chuen" },
        { code: "CHW", name: "Chai Wan" },
      ],
    },
    TWL: {
      text: "荃灣線",
      color: "#ff3131",
      sta: [
        { code: "CEN", name: "Central" },
        { code: "ADM", name: "Admiralty" },
        { code: "TST", name: "Tsim Sha Tsui" },
        { code: "JOR", name: "Jordan" },
        { code: "YMT", name: "Yau Ma Tei" },
        { code: "MOK", name: "Mong Kok" },
        { code: "PRE", name: "Price Edward" },
        { code: "SSP", name: "Sham Shui Po" },
        { code: "CSW", name: "Cheung Sha Wan" },
        { code: "LCK", name: "Lai Chi Kok" },
        { code: "MEF", name: "Mei Foo" },
        { code: "LAK", name: "Lai King" },
        { code: "KWF", name: "Kwai Fong" },
        { code: "KWH", name: "Kwai Hing" },
        { code: "TWH", name: "Tai Wo Hau" },
        { code: "TSW", name: "Tsuen Wan" },
      ],
    },
    SIL: {
      text: "南港島線",
      color: "#cbcd09",
      sta: [
        { code: "ADM", name: "Admiralty" },
        { code: "OCP", name: "Ocean Park" },
        { code: "WCH", name: "Wong Chuk Hang" },
        { code: "LET", name: "Lei Tung" },
        { code: "SOH", name: "South Horizons" },
      ],
    },
    TCL: {
      text: "東涌線",
      color: "#f6943d",
      sta: [
        { code: "HOK", name: "Hong Kong" },
        { code: "KOW", name: "Kowloon" },
        { code: "OLY", name: "Olympic" },
        { code: "NAC", name: "Nam Cheong" },
        { code: "LAK", name: "Lai King" },
        { code: "TSY", name: "Tsing Yi" },
        { code: "SUN", name: "Sunny Bay" },
        { code: "TUC", name: "Tung Chung" },
      ],
    },
    EAL: {
      text: "東鐵線",
      color: "#5ce1e6",
      sta: [
        { code: "ADM", name: "Admiralty" },
        { code: "EXC", name: "Exhibition Centre" },
        { code: "HUH", name: "Hung Hom" },
        { code: "MKK", name: "Mong Kok East" },
        { code: "KOT", name: "Kowloon Tong" },
        { code: "TAW", name: "Tai Wai" },
        { code: "SHT", name: "Sha Tin" },
        { code: "FOT", name: "Fo Tan" },
        { code: "RAC", name: "Racecourse" },
        { code: "UNI", name: "University" },
        { code: "TAP", name: "Tai Po Market" },
        { code: "TWO", name: "Tai Wo" },
        { code: "FAN", name: "Fanling" },
        { code: "SHS", name: "Sheung Shui" },
        { code: "LOW", name: "Lo Wu" },
        { code: "LMC", name: "Lok Ma Chau" },
      ],
    },
    TML: {
      text: "屯馬線",
      color: "#8d6019",
      sta: [
        { code: "WKS", name: "Wu Kai Sha" },
        { code: "MOS", name: "Ma On Shan" },
        { code: "HEO", name: "Heng On" },
        { code: "TSH", name: "Tai Shui Hang" },
        { code: "SHM", name: "Shek Mun" },
        { code: "CIO", name: "City One" },
        { code: "STW", name: "Sha Tin Wai" },
        { code: "CKT", name: "Che Kung Temple" },
        { code: "TAW", name: "Tai Wai" },
        { code: "HIK", name: "Hin Keng" },
        { code: "DIH", name: "Diamond Hill" },
        { code: "KAT", name: "Kai Tak" },
        { code: "SUW", name: "Sung Wong Toi" },
        { code: "TKW", name: "To Kwa Wan" },
        { code: "HOM", name: "Ho Man Tin" },
        { code: "HUH", name: "Hung Hom" },
        { code: "ETS", name: "East Tsim Sha Tsui" },
        { code: "AUS", name: "Austin" },
        { code: "NAC", name: "Nam Cheong" },
        { code: "MEF", name: "Mei Foo" },
        { code: "TWW", name: "Tsuen Wan West" },
        { code: "KSR", name: "Kam Sheung Road" },
        { code: "YUL", name: "Yuen Long" },
        { code: "LOP", name: "Long Ping" },
        { code: "TIS", name: "Tin Shui Wai" },
        { code: "SIH", name: "Siu Hong" },
        { code: "TUM", name: "Tuen Mun" },
      ],
    },
    AEL: {
      text: "機場快線",
      color: "#3d9ea0",
      sta: [
        { code: "HOK", name: "Hong Kong" },
        { code: "KOW", name: "Kowloon" },
        { code: "TSY", name: "Tsing Yi" },
        { code: "AIR", name: "Airport" },
        { code: "AWE", name: "AsiaWorld Expo" },
      ],
    },
    TKL: {
      text: "將軍澳線",
      color: "#8d45ab",
      sta: [
        { code: "NOP", name: "North Point" },
        { code: "QUB", name: "Quarry Bay" },
        { code: "YAT", name: "Yau Tong" },
        { code: "TIK", name: "Tiu Keng Leng" },
        { code: "TKO", name: "Tseung Kwan O" },
        { code: "HAH", name: "Hang Hau" },
        { code: "POA", name: "Po Lam" },
        { code: "LHP", name: "LOHAS Park" },
      ],
    },
  };

  function mtrStation(line) {
    // reset the station and button and update the time
    lastUpdate();
    let buttonspace = document.querySelector("#button-space");
    buttonspace.innerText = "";
    const mainStation = document.querySelector("#stationPages");
    mainStation.innerText = "";
    mainStation.style.border = "";
    // set different valuable
    const stations = allLine[line].sta;
    const station = stations.map((x) => Object.values(x)).map((x) => x[0]);
    const stationColor = allLine[line].color;
    const destination1 = stations[station.length - 2].code;
    const destination2 = stations[station.length - 1].code;
    // set the targeted array of wanted station
    const upStation = station.slice(0, station.length - 1);
    const upStationName = stations[station.length - 1].name;
    const downStation = station.slice(1).reverse();
    const downStationName = stations[0].name;

    if (line === "TKL" || destination2 === "LHP") {
      makeButton(
        line,
        buttonspace,
        stations[station.length - 2].name,
        station.slice(0, station.length - 2),
        stationColor,
        "UP",
        destination1
      );
      makeButton(
        line,
        buttonspace,
        upStationName,
        station.slice(0, station.length - 3),
        stationColor,
        "UP",
        destination2
      );
      makeButton(
        line,
        buttonspace,
        downStationName,
        downStation,
        stationColor,
        "DOWN"
      );
    } else if (line === "EAL" || line === "TKL") {
      makeButton(
        line,
        buttonspace,
        stations[station.length - 2].name,
        station.slice(0, station.length - 2),
        stationColor,
        "UP",
        destination1
      );
      makeButton(
        line,
        buttonspace,
        upStationName,
        station.slice(0, station.length - 2),
        stationColor,
        "UP",
        destination2
      );
      makeButton(
        line,
        buttonspace,
        downStationName,
        downStation,
        stationColor,
        "DOWN"
      );
    } else {
      makeButton(
        line,
        buttonspace,
        upStationName,
        upStation,
        stationColor,
        "UP"
      );
      makeButton(
        line,
        buttonspace,
        downStationName,
        downStation,
        stationColor,
        "DOWN"
      );
    }
  }

  function makeButton(
    line,
    container,
    stationName,
    stationCodes,
    stationColor,
    direction,
    destination
  ) {
    const button = document.createElement("button");
    button.classList.add("button");
    button.innerText = `To: ${stationName}`;
    container.appendChild(button);

    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.1)"; // Slightly enlarge the button
      button.style.transition = "background-color 0.3s, transform 0.3s"; // Smooth transition
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)"; // Reset size
    });

    button.addEventListener("click", async () => {
      const allButtons = document.querySelectorAll(".button");
      allButtons.forEach((btn) => btn.classList.remove("selected"));

      button.classList.add("selected");

      const mainStation = document.querySelector("#stationPages");
      mainStation.style.border = "2px solid black";
      mainStation.style.borderRadius = "10px";
      mainStation.style.backgroundColor = "lightgray";
      mainStation.innerText = "";
      const stationElements = [];

      for (const element of stationCodes) {
        const stationInfo = allLine[line].sta.find(
          (station) => station.code === element
        );
        if (stationInfo) {
          const box = document.createElement("div");
          box.classList.add("box");
          box.style.backgroundColor = stationColor;
          box.style.color = stationColor;
          mainStation.appendChild(box);

          const nameOfStation = document.createElement("div");
          nameOfStation.classList.add("name");
          nameOfStation.innerText = stationInfo.name;
          box.appendChild(nameOfStation);

          const InfoTime = document.createElement("div");
          InfoTime.classList.add("time");
          InfoTime.innerText = `Arrive Time: `;
          box.appendChild(InfoTime);

          const InfoUntil = document.createElement("div");
          InfoUntil.classList.add("until");
          InfoUntil.innerText = `Time Until Next Train:  minute`;
          box.appendChild(InfoUntil);

          const InfoPlat = document.createElement("div");
          InfoPlat.classList.add("plat");
          InfoPlat.innerText = `Platform: `;
          box.appendChild(InfoPlat);

          stationElements.push({
            element,
            InfoTime,
            InfoUntil,
            InfoPlat,
            destination,
          });
        }
      }
      await fetchStationData(line, stationElements, direction);
    });
  }

  async function fetchStationData(line, stationElements, direction) {
    const fetchPromises = stationElements.map(
      async ({ element, InfoTime, InfoUntil, InfoPlat, destination }) => {
        let data1 = {};
        let url = `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${line}&sta=${element}`; // set url
        let retries = 5;
        let success = false;

        while (!success && retries > 0) {
          try {
            let res = await fetch(url); // first await
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            data1 = await res.json(); // take the data and store it in data1
            success = true;
          } catch (error) {
            console.error(
              `Fetch failed for ${element}: ${error.message}. Retrying...`
            );
            retries--;
            await delay(200);
          }
        }

        if (!success) {
          console.error(
            `Failed to fetch data for ${element} after multiple attempts.`
          );
          return;
        }

        if (
          (line === "EAL" && destination) ||
          (line === "TKL" && destination)
        ) {
          let trainData = data1.data[`${line}-${element}`][direction];
          let output = [];
          if (trainData !== undefined && trainData.length > 0) {
            output.push(trainData.find((x) => x.dest === destination).time);
            output.push(trainData.find((x) => x.dest === destination).ttnt);
            output.push(trainData.find((x) => x.dest === destination).plat);
          }
          console.log(output[1]);
          if (output.length !== 0) {
            InfoTime.innerText = `Arrive Time: ${formatTime(output[0])}`;
            if (output[1] >= 1) {
              InfoUntil.innerText = `Time Until Next Train: ${output[1]} minute`;
            } else {
              InfoUntil.innerText = `Time Until Next Train: arriving`;
            }
            InfoPlat.innerText = `Platform: ${output[2]}`;
          } else {
            InfoTime.innerText = "";
            InfoUntil.innerText = "Train Not Exist";
            InfoPlat.innerText = "";
          }
        } else {
          let trainData = data1.data[`${line}-${element}`][direction];
          let output = [];
          if (trainData !== undefined && trainData.length > 0) {
            output.push(trainData[0].time);
            output.push(trainData[0].ttnt);
            output.push(trainData[0].plat);
          }

          if (output.length !== 0) {
            InfoTime.innerText = `Arrive Time: ${formatTime(output[0])}`;
            if (output[1] >= 1) {
              InfoUntil.innerText = `Time Until Next Train: ${output[1]} minute`;
            } else {
              InfoUntil.innerText = `Time Until Next Train: arriving`;
            }
            InfoPlat.innerText = `Platform: ${output[2]}`;
          } else {
            InfoTime.innerText = "";
            InfoUntil.innerText = "Train Not Exist";
            InfoPlat.innerText = "";
          }
        }
      }
    );

    // Execute all fetch promises in parallel
    await Promise.all(fetchPromises);
  }

  function formatTime(timestamp) {
    const timePart = timestamp.split(" ")[1];
    const [hours, minutes, seconds] = timePart.split(":").map(Number);

    const period = hours >= 12 ? "PM" : "AM";
    const normalizedHours = hours % 12 || 12;

    return `${normalizedHours}:${String(minutes).padStart(2, "0")} ${period}`;
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function lastUpdate() {
    const lastUpdateTime = document.querySelector("#lastUpdate");
    const url = "https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php";
    const res = await fetch(url);
    const data = await res.json();
    lastUpdateTime.innerText = `Last update time : ${data.timestamp}`;
  }
  lastUpdate();

  function addStation() {
    const container = document.querySelector("#container");
    let stations = Object.keys(allLine);
    console.log(stations);

    for (const station of stations) {
      const color = allLine[station].color;
      const text = allLine[station].text;
      const stat = document.createElement("div");
      stat.classList.add("option");
      stat.classList.add(station);
      stat.style.color = "black";
      stat.style.border = `2px solid ${color}`;
      stat.innerText = text;

      stat.addEventListener("mouseenter", () => {
        stat.style.backgroundColor = color; // Change background color on hover
        stat.style.borderColor = "dark" + color; // Darker border color on hover
        stat.style.transition = "background-color 0.3s, transform 0.3s";

        const luminance = getLuminance(
          `rgb(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
            color.slice(3, 5),
            16
          )}, ${parseInt(color.slice(5, 7), 16)})`
        );
        stat.style.color = luminance < 0.5 ? "white" : "black"; // Set text color based on luminance
      });

      stat.addEventListener("mouseleave", () => {
        stat.style.backgroundColor = ""; // Reset background color
        stat.style.borderColor = color; // Reset border color
        stat.style.color = "black"; // Reset text color to original
      });

      container.appendChild(stat);
    }
  }
  addStation();

  function getLuminance(color) {
    const rgb = color.match(/\d+/g).map(Number);
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;

    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance;
  }

  function addStationListener(stationId) {
    const stationElement = document.querySelector(`.${stationId}`);
    stationElement.addEventListener("click", () => {
      // Remove selected class from all station buttons
      const allStations = document.querySelectorAll(".option");
      allStations.forEach((station) => station.classList.remove("selected"));

      // Add selected class to the clicked station button
      stationElement.classList.add("selected");

      // Call mtrStation with the selected stationId
      mtrStation(stationId);
    });
  }
  for (let station in allLine) addStationListener(station);
});
