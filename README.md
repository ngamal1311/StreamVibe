# 🎬 StreamVibe

**Discover. Watch. Enjoy.**

StreamVibe is a responsive movie and TV shows discovery platform where users can explore trending movies, discover popular TV shows, browse different genres, and manage their personal watchlists.

🌐 **Live Demo:** [https://stream-vibe-ah9a.vercel.app/](https://stream-vibe-ah9a.vercel.app/)

## ✨ Features

- Browse popular and trending movies and TV shows.
- Explore movies and shows by genre.
- View detailed information about movies and TV shows.
- User registration and authentication.
- Add and remove movies and shows from Favorites.
- Save movies and shows to your personal watchlist.
- User profile management.
- Responsive design for different screen sizes.

## 🛠️ Tech Stack

### Frontend

- React.js
- Tailwind CSS
- JavaScript
- React Router
- TMDB API

### Backend

- Python
- Django
- Django REST Framework
- JWT Authentication

### Database & Deployment

- PostgreSQL (Neon)
- Vercel (Frontend)
- EthioDeploy (Backend)

## 🚀 Live Demo

Check out the deployed application:

[StreamVibe – Live Website](https://stream-vibe-ah9a.vercel.app/)

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ngamal1311/StreamVibe.git
cd StreamVibe
```

### 2. Run the Frontend

```bash
cd Frontend
npm install
```

Create a `.env` file inside the Frontend folder:

```env
REACT_APP_API_URL=your_backend_url
REACT_APP_TMDB_TOKEN=your_tmdb_token
```

Start the development server:

```bash
npm start
```

### 3. Run the Backend

```bash
cd Backend
pip install -r requirements.txt
```

Configure your environment variables in a `.env` file, then run:

```bash
python manage.py migrate
python manage.py runserver
```

## 👩‍💻 Developer

**Noura Gamal**

- GitHub: [@ngamal1311](https://github.com/ngamal1311)

