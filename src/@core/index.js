import Navigation from "@core/router/Navigation";
import path from "path";

function setupListeners() {
  Navigation.setupListeners();
}

function importGlobalFiles() {
  Navigation.loadScript(
    path.resolve(__dirname, "/src/@core/router/Navigation")
  );
  Navigation.loadScript(path.resolve(__dirname, "/src/@core/router/Router"));
}

export default { setupListeners, importGlobalFiles };
