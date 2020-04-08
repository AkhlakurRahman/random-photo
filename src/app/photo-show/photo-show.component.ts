import { Component, OnInit } from "@angular/core";

import { PhotosService } from "../photos.service";

@Component({
  selector: "app-photo-show",
  templateUrl: "./photo-show.component.html",
  styleUrls: ["./photo-show.component.css"],
})
export class PhotoShowComponent implements OnInit {
  photoUrl = "";

  constructor(private photo: PhotosService) {
    this.fetchPhoto();
  }

  getPhoto() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photo.queryPhoto().subscribe((photo) => {
      this.photoUrl = photo;
    });
  }

  ngOnInit() {}
}
