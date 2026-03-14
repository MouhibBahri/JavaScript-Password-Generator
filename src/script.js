import { generatePassword } from "./passwordUtils";

if (typeof document !== "undefined") {
  const characterAmountRange = document.getElementById("characterAmountRange");
  const characterAmountNumber = document.getElementById(
    "characterAmountNumber",
  );
  const includeUppercaseElement = document.getElementById("includeUppercase");
  const includeNumbersElement = document.getElementById("includeNumbers");
  const includeSymbolsElement = document.getElementById("includeSymbols");
  const form = document.getElementById("passwordGeneratorForm");
  const passwordDisplay = document.getElementById("passwordDisplay");

  characterAmountNumber.addEventListener("input", syncCharacterAmount);
  characterAmountRange.addEventListener("input", syncCharacterAmount);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const password = generatePassword(
      characterAmount,
      includeUppercase,
      includeNumbers,
      includeSymbols,
    );
    passwordDisplay.innerText = password;
  });

  function syncCharacterAmount(e) {
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
  }
}
