# 🔐 PassOP — Password Manager with CLI & TUI Support

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Python Version](https://img.shields.io/badge/Python-3.10+-blue.svg)](https://www.python.org/)
[![Issues](https://img.shields.io/github/issues/vedantb23/PassOP)](https://github.com/vedantb23/PassOP/issues)
[![Stars](https://img.shields.io/github/stars/vedantb23/PassOP?style=social)](https://github.com/vedantb23/PassOP/stargazers)

PassOP is a secure and minimal **Password Manager** built with Python. It supports both **CLI** and **TUI** interfaces, making it efficient and user-friendly for developers and terminal lovers. Passwords are encrypted and stored locally using industry-grade algorithms.

---

## 🚀 Features

- 🔐 AES-256 encryption
- 🧾 Store, update, delete credentials
- 📋 Copy passwords to clipboard (securely)
- 📜 Search credentials
- 🖥️ CLI + TUI with Rich experience
- 🧪 Unit-tested core components

---

## 📸 Preview

### TUI Interface

![TUI Demo](assets/tui-demo.gif)

---

## 📦 Installation

```bash
git clone https://github.com/vedantb23/PassOP.git
cd PassOP
pip install -r requirements.txt
```

---

## 🛠️ Usage

### 🔧 Initialize the Vault

```bash
python passop.py init
```

### ➕ Add a New Entry

```bash
python passop.py add
```

### 📄 List All Entries

```bash
python passop.py list
```

### 🔍 Search Entry

```bash
python passop.py search
```

### 🧑‍💻 Launch TUI Mode

```bash
python passop.py tui
```

---

## 🔐 Security

- Uses Python's `cryptography` package with **Fernet symmetric encryption** (AES under the hood).
- Passwords are only decrypted in-memory and never logged or exposed.
- Vault file is locked with a **master password**.

---

## 📁 Project Structure

```
PassOP/
├── passop.py          # Main entry point
├── core/              # Encryption & database logic
├── tui/               # Terminal UI built with Rich
├── utils/             # Helper functions
├── assets/            # Demo GIFs and images
├── requirements.txt
└── README.md
```

---

## 🧪 Running Tests

```bash
pytest
```

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/vedantb23/PassOP/issues) or submit a [pull request](https://github.com/vedantb23/PassOP/pulls).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 💡 Inspiration

PassOP was built to combine the power of terminal tools with the security of modern encryption — keeping privacy in your hands.

---

## ⭐️ Show Your Support

If you found this project helpful, please consider giving it a ⭐ on GitHub!
