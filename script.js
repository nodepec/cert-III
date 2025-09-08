(() => {
  const facts = [
    "The longest Monopoly game reportedly lasted 70 days.",
    "Catan (1995) helped kick off the modern board game boom.",
    "Some people sleeve every card. Others live dangerously.",
    "Azul’s tiles were inspired by Portuguese azulejos.",
    "House rules are great — just agree before turn one!"
  ];
  const el = document.getElementById("fact");
  const btn = document.getElementById("shuffle");
  if (!el || !btn) return;
  const pick = () => { el.textContent = facts[Math.floor(Math.random()*facts.length)]; };
  btn.addEventListener("click", pick);
  pick();
})();