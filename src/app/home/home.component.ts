import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';
import {Movie} from '../interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[];
  constructor(private  movieService: MoviesService) {
    this.getMovies();
  }

  getMovies(){

    this.movieService.get().subscribe(
      (data: Movie[]) =>{
        this.movies = data;
      },
      (error) => {
        alert('Ocurrio un errror')
        console.log(error);
      } );
  }

  ngOnInit() {
  }

  delete(id){
    if (confirm('seguro que desea eliminar esta pelicula')) {
      this.movieService.delete(id).subscribe((data) => {
        this.getMovies();
        alert('Eliminacion con Exito');
        console.log(data);
      }, (error) => {
        console.log(error);

      });
    }
  }

}
