import '../style/Home.css';

export default function Appinfo() {
  return (
    <div className="me-5 heading">
      <h1 >Get the Zomato app</h1>
      <p>
        We will send you a link, open it on your phone to download the app
      </p>

      <div className="flex space-x-4 mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="contact-method"
            value="email"
            className="mr-2"
            defaultChecked
          />
          Email
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="contact-method"
            value="phone"
            className="mr-2"
          />
          Phone
        </label>
      </div>

      <input
        type="text"
        placeholder="Email"
        className="border border-border dark:border-primary rounded-lg p-2 mb-4 w-80"
      />

      <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/80 p-2 rounded-lg mb-4">
        Share App Link
      </button>

      <div className="flex space-x-4">
        <a href="#" className="flex items-center">
          <img
            alt="Google Play"
            src="https://static.vecteezy.com/system/resources/previews/024/170/871/non_2x/badge-google-play-and-app-store-button-download-free-png.png"
            height="50"
            width="150"/>
           
        </a>
        <a href="#" className="flex items-center">
          <img
            alt="App Store"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLwBFEP8AZ8tUiJtH1JgUT8l0Sw7z5O19Yg&s"
             height="50"
            width="150"
          />
        </a>
      </div>
    </div>
  );
}
