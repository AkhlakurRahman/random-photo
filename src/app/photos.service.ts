import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pluck } from "rxjs/operators";

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: "root",
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  queryPhoto() {
    return this.http
      .get<UnsplashResponse>("https://api.unsplash.com/photos/random", {
        headers: {
          Authorization:
            "Client-ID -HxzXZQb2W3ld3Qp1w8kC5T3iLSau5D9mPLDT2LNb3w",
        },
      })
      .pipe(pluck("urls", "regular"));
  }
}
