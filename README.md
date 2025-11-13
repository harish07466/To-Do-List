```md
# 📝 To-Do List App (React + Vite)

A clean, fast, and user-friendly **To-Do List Application** built using **React + Vite**.  
Track your daily tasks, mark them as complete, and stay productive with a smooth UI.  
All tasks are automatically saved using **LocalStorage**, so your progress remains even after refreshing the page.

---

## 🚀 Live Demo  
🌐 **https://todo-list-dailygoals.netlify.app/**

---

## 📛 Badges

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Build-blueviolet?logo=vite)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-success?logo=netlify)
![License](https://img.shields.io/badge/License-Open--Source-green)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

---

## 📸 Screenshots

<img width="1919" height="909" alt="Screenshot 2025-11-13 203247" src="https://github.com/user-attachments/assets/6e07b381-64d5-4eb8-a4f0-6d6a668e3a4f" />
<img width="1919" height="913" alt="Screenshot 2025-11-13 203528" src="https://github.com/user-attachments/assets/270d4e20-0ee5-4cc2-8548-82f426e95f19" />
<img width="1919" height="912" alt="Screenshot 2025-11-13 203400" src="https://github.com/user-attachments/assets/b06f871f-03f2-4377-95bf-2e54a506faba" />

## ✨ Features

- ➕ **Add new tasks**
- ✔️ **Mark tasks as completed**
- 🔄 **Real-time task sorting (Incomplete → Completed)**
- 💾 **LocalStorage data persistence**
- 📊 **Daily progress counter (Completed / Total tasks)**
- 🎨 **Modern and responsive UI**
- ⚡ **Fast build & reload using Vite**
- 📱 Works on all screen sizes

## 🧩 Components Overview

- **Form.jsx** → Handles new task input  
- **Todo.jsx** → Main state + LocalStorage integration  
- **TodoList.jsx** → Renders and sorts tasks  
- **TodoItem.jsx** → Each task with completion toggle  
- **Footer.jsx** → Task summary (Completed vs Total)  
- **CSS Modules** → Component-scoped styling  


## 📁 Project Structure

src/
├── components/
│   ├── Form.jsx
│   ├── Todo.jsx
│   ├── TodoList.jsx
│   ├── TodoItem.jsx
│   ├── Footer.jsx
│   ├── form.module.css
│   ├── todoitem.module.css
│   ├── todolist.module.css
│   ├── header.module.css
│   └── footer.module.css
├── App.jsx
├── main.jsx
├── style.css
public/
vite.config.js

## 🛠️ Tech Stack

**Frontend:**
- React  
- Vite  
- JavaScript (ES6+)  
- CSS Modules  

## 🔧 Local Setup (Run the Project Locally)

### 1️⃣ Clone the repository
```sh
git clone https://github.com/harish07466/To-Do-List.git
````

### 2️⃣ Navigate to the project folder

```sh
cd To-Do-List
```

### 3️⃣ Install dependencies

```sh
npm install
```

### 4️⃣ Start development server

```sh
npm run dev
```

Your app will run at:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🏗️ Build for Production

```sh
npm run build
```

The optimized output will be inside the `dist/` folder.

---

## 🌐 Netlify Deployment

This project is deployed using **Netlify**.

### 🔹 Build Command

```
npm run build
```

### 🔹 Publish Directory

```
dist
```

### 🔹 Live URL

👉 [https://todo-list-dailygoals.netlify.app/](https://todo-list-dailygoals.netlify.app/)

To redeploy:

* Connect GitHub repo to Netlify **OR**
* Drag & Drop the `dist` folder into Netlify Deploy panel

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Steps to contribute:

```sh
1. Fork the repo
2. Create a new branch (git checkout -b feature-name)
3. Make your changes
4. Commit (git commit -m "Added feature")
5. Push to your branch
6. Open a Pull Request
```

---

## 📜 License

This project is **open-source** and free for personal or commercial use.

---

## 👤 Author

**Harish M Kumbar**
🌐 GitHub: [https://github.com/harish07466](https://github.com/harish07466)
🔗 Live Project: [https://todo-list-dailygoals.netlify.app/](https://todo-list-dailygoals.netlify.app/)

---


