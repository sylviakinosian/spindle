export class Species {

  constructor(
    public family: string,
    public genus: string,
    public species: string,
    public variety?: string,
    public date: string,
    public collector: string,
    public colNum: number,
    public location: string,
    public coordinates?: number,
    public elevation?: number,
    public AssociatedSpecies?: string,
    public comments?: string
  ) {  }

}
