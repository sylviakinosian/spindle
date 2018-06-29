export class Species {

  constructor(
    public family: string,
    public genus: string,
    public species: string,
    public collector: string,
    public colNumber: number,
    public date: string,
    public location: string,
    public elevation?: string,
    public coordinates?: string,
    public otherSpecies?: string,
    public notes?: string
  ) {  }

}
