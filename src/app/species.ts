export class Species {

constructor(
    public title: string,
    public family: string,
    public genus: string,
    public species: string,
    public collector: string,
    public whoWith: string,
    public colNumber: number,
    public homeHerb: string,
    public day: number,
    public month: string,
    public year: number,
    public location: string,
    public elevation?: string,
    public coordinates?: string,
    public otherSpecies?: string,
    public notes?: string
  ) {  }

}
