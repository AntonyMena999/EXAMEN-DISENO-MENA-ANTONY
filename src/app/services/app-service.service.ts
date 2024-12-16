import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }

  //galery
  getData() {
    return [
      {
        itemImageSrc: 'https://academiaculinaria.org/public/journals/1/submission_9_9_coverImage_es_ES.jpg',
        thumbnailImageSrc: 'https://i.ibb.co/x652C9M/submission-9-9-cover-Image-es-ES-1.jpg',
        alt: 'Description for Image 1',
        title: 'Galeria 1'
      },
      {
        itemImageSrc: 'https://ambienteplastico.com/wp-content/uploads/2021/07/foto_sprite_220721.jpg',
        thumbnailImageSrc: 'https://i.ibb.co/ZcS9G7s/sprite-3.jpg',
        alt: 'Description for Image 2 pequeña',
        title: 'Title 2'
      },
      {
        itemImageSrc: 'https://media.licdn.com/dms/image/v2/D4E12AQHn7_GPWXj8-A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709821682202?e=2147483647&v=beta&t=wiU8azHMMXFFNhhJik2-yq6r0o788hJ0fcyHGOtVsj0',
        thumbnailImageSrc: 'https://i.ibb.co/74bYb8D/cafffe-1.pnghttps://i.ibb.co/74bYb8D/cafffe-1.png',
        alt: 'cafe',
        title: 'Title 3'
      },
      {
        itemImageSrc: 'https://www.hogarmania.com/archivos/202102/como-dibujar-un-corazon-en-cafe-con-leche-pasos-848x477x80xX.jpg',
        thumbnailImageSrc: 'https://i.ibb.co/Zh3vm2p/cc-1.jpg',
        alt: 'cafe corazon',
        title: 'Title 4'
      },
      {
        itemImageSrc: 'https://mvsnoticias.com/u/fotografias/m/2023/5/4/f960x540-536615_610690_5050.jpg',
        thumbnailImageSrc: 'https://i.ibb.co/4gd5jbn/f960x540-536615-610690-5050-1.jpg',
        alt: 'cc',
        title: 'Title 5'
      },
      {
        itemImageSrc: 'https://www.recetavenezolana.com/wp-content/uploads/2022/01/RFB-2406-1-galletasdechocolateblanco-768x432.jpg.webp',
        thumbnailImageSrc: 'https://i.ibb.co/4sfYf7z/RFB-2406-1-galletasdechocolateblanco-768x432-jpg-1.jpg',
        alt: 'Description for Image 6',
        title: 'Title 6'
      },
      {
        itemImageSrc: 'https://rexal.com/wp-content/uploads/2020/10/0123221502_5_C45A4077-795x405-1-2.jpg',
        thumbnailImageSrc: 'https://i.ibb.co/ctdG4b1/0123221502-5-C45-A4077-795x405-1-2-1-1.jpg',
        alt: 'galleta',
        title: 'Title 7'
      },
      {
        itemImageSrc: 'https://www.hogarmania.com/archivos/202310/karl7227-pan-de-cristal-xl-848x477x80xX.jpg',
        thumbnailImageSrc: 'https://i.ibb.co/7nnHQNc/karl7227-pan-de-cristal-xl-1280x720x80x-X-1.jpg',
        alt: 'Description for Image 8',
        title: 'Title 8'
      }
    ];
  }

  getImages() {
    return Promise.resolve(this.getData());
  }
}

