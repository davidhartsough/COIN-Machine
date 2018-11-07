function COIN_Machine() {
  let celebrationTimeout = undefined;
  let coinCelebrationTimeout = undefined;
  let scrollTimeout = undefined;
  let dragTimeout = undefined;

  const celebrationMessages = [
    "Whoa, nice",
    "Rad",
    "Nice",
    "Great",
    "Amazing",
    "Fantastic",
    "Super",
    "Stupendous",
    "Terrific",
    "decent",
    "Now, that's a good",
    "Wow, I wanna see another",
    "I love the way you",
    "You should get paid to",
    "That was your best",
    "incredible",
    "What a truly talented",
    "Keep up that",
    "Lookin' like a real good",
    "Check out that",
    "Everybody say:",
    "I'd holla at that"
  ];

  const events = [
    "click",
    "dblclick",
    "contextmenu",
    "copy",
    "cut",
    "dragend",
    "paste",
    "keyup",
    "scroll"
  ];

  const buyingOptions = [
    {
      id: "claw",
      name: "Claw Machine",
      cost: 100
    },
    {
      id: "nuke",
      name: "Nuke",
      cost: 50
    },
    {
      id: "cursorSwap",
      name: "Cursor Swap",
      cost: 25
    },
    {
      id: "editMode",
      name: "Edit Mode",
      cost: 250
    },
    {
      id: "disco",
      name: "Disco Ball",
      cost: 100
    },
    {
      id: "wordSwap",
      name: "Word Swap",
      cost: 100
    },
    {
      id: "imageSwap",
      name: "Image Swap",
      cost: 100
    },
    {
      id: "mediaBomb",
      name: "Media Bomb",
      cost: 100
    },
    {
      id: "music",
      name: "Music",
      cost: 100
    },
    {
      id: "bubbles",
      name: "Bubbles",
      cost: 100
    },
    {
      id: "snowflakes",
      name: "Snowflakes",
      cost: 100
    },
    {
      id: "leaves",
      name: "Leaves",
      cost: 100
    },
    {
      id: "arrows",
      name: "Arrows",
      cost: 100
    },
    {
      id: "fireworks",
      name: "Fireworks",
      cost: 100
    }
  ];

  function coinShopCreator() {
    let optionsHtml = ``;
    buyingOptions.forEach(function(option) {
      optionsHtml += `
      <div class="shop-option" id="${option.id}">
        <p class="shop-option-title">${option.name}</p>
        <p class="shop-option-cost">
          <img class="shop-option-coin" src="https://vectr.com/davidhartsough/h51SQUS9f.svg?width=48&height=48&select=h51SQUS9fpage0" alt="coin"/>
          ${option.cost}
        </p>
      </div>
    `;
    });
    return `
    <div id="coin-shop">
      <div id="coin-shop-overlay"></div>
      <div id="coin-shop-dialog-wrapper">
        <div id="coin-shop-dialog">
          <p id="coin-shop-title">Buy something from the COIN Machine!</p>
          <p id="coin-shop-text">You earned it!</p>
          <div id="shop-options">
            ${optionsHtml}
          </div>
        </div>
      </div>
    </div>
  `;
  }

  const coinShopHtml = coinShopCreator();

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max + min);
  }

  function getRandomBoolean() {
    return Math.random() >= 0.5;
  }

  function getRandomCelebrationMessage() {
    return celebrationMessages[
      Math.floor(Math.random() * celebrationMessages.length)
    ];
  }

  function nukeIt() {
    if (document.body.id !== "nuked") {
      const allTheText = document.body.innerText;
      document.head.innerHTML = `
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
      <title>${document.title}</title>
    `;
      document.body.id = "nuked";
      document.body.innerHTML = '<p id="all-the-text"></p>';
      document.getElementById("all-the-text").innerText = allTheText;
      createTheMachine();
    }
  }

  function initializeCoinCollection() {
    for (var i = 0; i < events.length; i++) {
      document.addEventListener(events[i], function(event) {
        if (
          event.path.some(function(elem) {
            const elemId = elem.id || "";
            return elemId.indexOf("coin-") !== -1;
          })
        ) {
          return;
        }
        let eventName = event.type;
        let coins = getRandomNumber(1, 10);
        switch (eventName) {
          case "dblclick":
            eventName = "double click";
            break;
          case "keyup":
            eventName = "key press";
            break;
          case "contextmenu":
            eventName = "menu open";
            break;
          case "dragend":
            eventName = "drag";
            break;
          case "scroll":
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
              handleEvent(coins, eventName);
            }, 120);
            return;
        }
        handleEvent(coins, eventName);
      });
    }
  }

  function handleEvent(coins, eventName) {
    addCoins(coins);
    celebrate(`${getRandomCelebrationMessage()} ${eventName}!`);
  }

  function addCoins(numberOfCoins) {
    sessionStorage.coinCount = Number(sessionStorage.coinCount) + numberOfCoins;
    document.getElementById("coin-count").innerText = sessionStorage.coinCount;
    const coinCelebration = document.getElementById("coin-celebration");
    coinCelebration.innerText = "+" + numberOfCoins;
    coinCelebration.style.color = `hsl(${getRandomNumber(0, 359)}, 100%, 50%)`;
    clearTimeout(coinCelebrationTimeout);
    coinCelebrationTimeout = setTimeout(function() {
      coinCelebration.innerText = "";
    }, 1600);
  }

  function celebrate(message) {
    const celebration = document.getElementById("celebration");
    celebration.innerText = message;
    celebration.className = "show";
    let styleText = `
    top: ${getRandomNumber(4, 80)}%;
    left: ${getRandomNumber(4, 64)}%;
    color: hsl(${getRandomNumber(0, 359)}, 100%, 50%);
    letter-spacing: ${getRandomNumber(0, 4)}px;
  `;
    if (getRandomBoolean()) {
      styleText += `
      text-transform: uppercase;
    `;
    }
    if (getRandomBoolean()) {
      styleText += `
      text-shadow: ${getRandomNumber(0, 2)}px ${getRandomNumber(
        1,
        3
      )}px hsl(0, 0%, ${getRandomNumber(0, 100)}%);
    `;
    }
    celebration.style.cssText = styleText;
    clearTimeout(celebrationTimeout);
    celebrationTimeout = setTimeout(function() {
      celebration.className = "hide";
    }, 1600);
  }

  function initializeCelebration() {
    const celebration = document.createElement("div");
    celebration.id = "celebration";
    document.body.appendChild(celebration);
  }

  function buyItem(item) {
    const cost = buyingOptions.find(function(option) {
      return option.id === item;
    }).cost;
    if (Number(sessionStorage.coinCount) >= cost) {
      document.getElementById("coin-shop").className = "hide";
      sessionStorage.coinCount = Number(sessionStorage.coinCount) - cost;
      document.getElementById("coin-count").innerText =
        sessionStorage.coinCount;
      switch (item) {
        case "nuke":
          //
          break;
      }
    }
  }

  function createTheCoinShop() {
    const coinShopDiv = document.createElement("div");
    coinShopDiv.id = "coin-shop-container";
    document.body.appendChild(coinShopDiv);
    document.getElementById("coin-shop-container").innerHTML = coinShopHtml;
    buyingOptions.forEach(function(option) {
      document
        .getElementById(option.id)
        .addEventListener("click", function(event) {
          buyItem(this.id);
        });
    });
  }

  function openCoinMachine() {
    document.getElementById("coin-shop").className = "show";
  }

  function closeCoinMachine() {
    document.getElementById("coin-shop").className = "hide";
  }

  function createTheMachine() {
    const coinMachineDiv = document.createElement("div");
    coinMachineDiv.id = "coin-machine-container";
    document.body.appendChild(coinMachineDiv);
    document.getElementById("coin-machine-container").innerHTML = `
    <div id="coin-machine">
      <img id="coin-machine-img" src="https://vectr.com/davidhartsough/aAufEJl9y.svg?width=640&height=640&select=aAufEJl9ypage0" alt="COIN Machine"/>
    </div>
    <p id="coin-counter">
      <img id="coin-img" src="https://vectr.com/davidhartsough/h51SQUS9f.svg?width=48&height=48&select=h51SQUS9fpage0" alt="coin counter" />
      <span id="coin-count">${sessionStorage.coinCount}</span>
    </p>
    <p id="coin-celebration"></p>
  `;
    document
      .getElementById("coin-machine")
      .addEventListener("click", function() {
        openCoinMachine();
      });
    createTheCoinShop();
    document
      .getElementById("coin-shop-dialog-wrapper")
      .addEventListener("click", function() {
        closeCoinMachine();
      });
    initializeCelebration();
  }

  function initializeCoinMachine() {
    if (!sessionStorage.coinCount) {
      sessionStorage.coinCount = 0;
    }
    createTheMachine();
    initializeCoinCollection();
  }

  initializeCoinMachine();
  console.log("COIN MACHINE ACTIVATED");
}

if (document.getElementById("coin-machine-container") === null) {
  COIN_Machine();
}
