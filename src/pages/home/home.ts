import { Funcionario } from './../../model/funcionario';
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, Alert } from 'ionic-angular';
import { RegistroPonto } from '../../model/registro-ponto';
import { Geolocation } from '@ionic-native/geolocation';
import { RegistroPontoProvider } from '../../providers/registro-ponto/registro-ponto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  matricula: number;
  senha: string;
  latitude: number;
  longitude: number;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private geolocation: Geolocation,
    private registroProvider: RegistroPontoProvider) {
  }

  registrarPonto() {
    let errorOnGeocoding = false;
    let loader = this.turnOnLoader();

    loader.setContent("Buscando localização...");

    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
      loader.setContent("Gravando registro...");

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      let registro = new RegistroPonto();
      registro.funcionario = new Funcionario(this.matricula, this.senha);
      registro.latitude = this.latitude;
      registro.longitude = this.longitude;

      this.registroProvider.registrarPonto(registro)
        .subscribe(result => {
          this.showDefaultAlert("Sucesso!", "O ponto foi registrado com sucesso.");
          loader.dismiss();
          return;
        }, error => {
          this.showDefaultAlert("Erro!", "Usuário ou senha inválidos.");
          loader.dismiss();
        });
    }).catch((error) => {
      loader.dismiss();
      this.showDefaultAlert("Erro!", `Ocorreu um erro ao buscar sua localização, verifique as permissões e tente novamente.`);
    });
  }

  turnOnLoader(): Loading {
    let loader = this.loadingCtrl.create({
      content: "Por favor aguarde...",
    });
    loader.present();
    return loader;
  }

  private showDefaultAlert(title: string, message: string): Alert {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: ['OK!']
    });
    alert.present();
    return alert;
  }

}
