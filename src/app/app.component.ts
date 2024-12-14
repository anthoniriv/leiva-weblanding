import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { InicioComponent } from "./inicio/inicio.component";
import { NosotrosComponent } from "./nosotros/nosotros.component";
import { MisionComponent } from "./mision/mision.component";
import { VisionComponent } from "./vision/vision.component";
import { PromesaComponent } from "./promesa/promesa.component";
import { ValoresComponent } from "./valores/valores.component";
import { PaquetesComponent } from "./paquetes/paquetes.component";
import { ContactanosComponent } from "./contactanos/contactanos.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, InicioComponent, NosotrosComponent, MisionComponent, VisionComponent, PromesaComponent, ValoresComponent, PaquetesComponent, ContactanosComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'grupo-leiva';
}
