# Weather App (React + Material UI)

A React weather application built with Vite and Material UI, powered by the OpenWeatherMap API.

## Setup & Configuration

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gopalrajlohiya11-ui/Weather-App.git
   cd Weather-App
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and add your OpenWeatherMap API key:
     ```env
     VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
     ```
   - You can get a free API key at [OpenWeatherMap](https://openweathermap.org/api).

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```
