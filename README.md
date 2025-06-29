# 🧮 Simple-JavaScript-Calculator-Clean-Modular

A fully functional calculator built with **vanilla JavaScript**, **HTML**, and **CSS** — designed for simplicity, safety, and clean code structure.

---

## 🔧 Features

- ✅ Basic operations: `+`, `-`, `×`, `÷`, `%`
- ✅ Decimal point control (`.`)
- ✅ Toggle sign (`+/-`)
- ✅ Input cleanup: prevents double operators or invalid dots
- ✅ No use of `eval()` – safe evaluation with `Function` and input sanitization
- ✅ Clear display with `AC` button
- ✅ Modular and maintainable code

---

## 📂 Project Structure

```
calculator/
├── index.html        # Main HTML structure
├── style.css         # Basic styling for layout and buttons
└── app.js            # Core JavaScript logic (modular & safe)
```


---

## 🚀 How to Use

1. Clone the repo:

    ```bash
    git clone https://github.com/iRezaAkhlaghi/Simple-JavaScript-Calculator-Clean-Modular.git
    ```

2. Open the folder on your computer.

3. Launch `index.html` in your browser.

4. Start clicking and calculating!

---

## 🧠 Code Highlights

- Keeps internal state (`currentContent`) separate from display
- Handles operator replacement (e.g., `2 + ×` → `2 ×`)
- Uses regular expressions for number/decimal validation
- Safe parsing with error handling (`try-catch`)

---

## 📦 Future Improvements (optional ideas)

- Add keyboard support
- Add history panel
- Add dark mode
- Add parentheses support

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is open source under the [MIT License](LICENSE).
