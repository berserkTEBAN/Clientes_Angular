import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private firestore:AngularFirestore) { }

  //metodod que permita obtener todos los documentos de la coleccion

  getLibros(){
    return this.firestore.collection('libros').snapshotChanges();

  }

  //metodo para insertar un documento

  createLibro(libro:Libro){
    return this.firestore.collection('libros').add(Object.assign({},libro));
  }

  //metodo para actualoizar un documento existente

  updateLibro(libro:Libro){
    this.firestore.doc('libros/'+libro.id ).update(libro);
  }

  //metodo para elimianar un documento

  deleteLibro(libroId:string){
    this.firestore.doc('libros/'+libroId).delete();
  }
  
}
