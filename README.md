# 📝 iTask - Todo Manager

iTask is a simple and responsive **Todo Management Web App** built with **React and Tailwind CSS**.
It allows users to **add, edit, delete, and manage daily tasks** in one place with persistent storage using **Local Storage**.

---

## 🚀 Features

* ➕ Add new todos
* ✏ Edit existing todos
* 🗑 Delete todos
* ✅ Mark todos as completed
* 💾 Automatic saving using **Local Storage**
* 📱 Responsive design (Mobile + Desktop)
* 🚫 Prevents adding empty todos
* 🌙 Dark Mode support (optional enhancement)

---

## 🛠 Technologies Used

* **React.js** – UI development
* **Tailwind CSS** – Styling
* **UUID** – Unique ID generation for todos
* **Local Storage API** – Persistent data storage

---

## 📂 Project Structure

```
src
│
├── App.jsx        # Main Todo Logic
├── Navbar.jsx     # Navigation Bar Component
├── index.css      # Tailwind CSS styling
└── main.jsx       # React Entry Point
```

---

## ⚙ How It Works

### 1️⃣ Adding a Todo

Users type a task in the input field and click **Save**.
A unique ID is generated using **uuid**, and the task is added to the todo list.

### 2️⃣ Editing a Todo

Clicking **Edit** loads the selected todo back into the input field so it can be modified.

### 3️⃣ Completing a Todo

Users can mark a task as completed by clicking the **checkbox**.
Completed tasks are visually shown with a **line-through style**.

### 4️⃣ Deleting a Todo

Clicking **Delete** removes the task from the list.

### 5️⃣ Local Storage Persistence

All todos are stored in **browser local storage**, so tasks remain saved even after refreshing the page.

---

## 💻 Installation & Setup

1. Clone the repository

```
git clone https://github.com/yourusername/itask-todo-app.git
```

2. Navigate to the project folder

```
cd itask-todo-app
```

3. Install dependencies

```
npm install
```

4. Run the development server

```
npm run dev
```

---

## 📱 Responsive Design

The app is designed to work smoothly on:

* Desktop 💻
* Tablets 📱
* Mobile devices 📱

Tailwind's responsive utilities ensure proper layout adjustments.

---

## 🎨 UI Highlights

* Color-coded action buttons
* Responsive layout
* Interactive hover effects
* Clean and minimal design

---

## 🔮 Future Improvements

Possible upgrades for this project:

* 🔍 Filter todos (All / Completed / Pending)
* 🌙 Full Dark Mode support
* 🧹 Clear completed tasks
* 📊 Task statistics
* ☁ Cloud storage integration

---

## 📄 License

This project is open-source and available for learning and personal use.

---

## 👨‍💻 Author

Developed by **[Mohd Nazim]**

If you like this project, feel free to ⭐ the repository!
