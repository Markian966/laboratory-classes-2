/*
  📦 Dependy the Importer  
  Zaimportuj wszystkie wymagane moduły: path, express, body-parser, logger oraz routing.  
*/
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const { STATUS_CODE } = require("./constants/statusCode");
const { getInfoLog, getErrorLog } = require("./utils/logger");
const productRoutes = require("./routing/product");
const logoutRoutes = require("./routing/logout");
const homeRoutes = require("./routing/home");
const killRoutes = require("./routing/kill");

/*
  🏗 Structo the Builder  
  Utwórz instancję aplikacji express i zapisz ją w stałej app.  
*/
const app = express();

/*
  🏗 Structo the Builder  
  Zarejestruj middleware body-parser do parsowania ciał formularzy. 
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
  🏗 Structo the Builder  
  Dodaj middleware logujący informacje o każdym przychodzącym żądaniu.  
*/
app.use((req, res, next) => {
  getInfoLog(req.method, req.url);
  next();
});

/*
  🏗 Structo the Builder  
  Zarejestruj middleware obsługujące poszczególne ścieżki.  
*/
app.use("/", homeRoutes);
app.use("/product", productRoutes);
app.use("/logout", logoutRoutes);
app.use("/kill", killRoutes);

/*
  🏗 Structo the Builder  
    Obsłuż stronę 404 – zwróć plik 404.html i zaloguj błąd.   
*/
app.use((req, res) => {
  res.status(STATUS_CODE.NOT_FOUND).sendFile(path.join(__dirname, "views", "404.html"));
  getErrorLog(req.url);
});

/*
  🏗 Structo the Builder  
    Uruchom serwer i nasłuchuj na porcie z config.js.    
*/
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});