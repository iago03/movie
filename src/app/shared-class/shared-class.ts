export class PopularMoviesItems {
    id:number;
    backdrop_path:string;
    poster_path:string;
    original_title:string;
    overview:string;
    release_date:string;
    original_language:string;
    vote_average:number;

    constructor(id:number,background:string,poster:string,title:string,overview:string,releas:string,lang:string,vote:number){
        this.id = id;
        this.backdrop_path = background;
        this.poster_path = poster;
        this.original_title = title;
        this.overview = overview;
        this.release_date = releas;
        this.original_language = lang;
        this.vote_average = vote;
    }

}


export class ItemInfo extends PopularMoviesItems{
    budget:number;
    genres:any[];
    production_companies:any[];
    runtime:number;
    status:string;

    constructor(id:number,background:string,poster:string,title:string,overview:string,releas:string,lang:string,vote:number, 
        budget:number, genrs:[],companies:[],runtime:number,status:string){
        super(id,background,poster,title,overview,releas,lang,vote);
        this.budget = budget;
        this.genres = genrs;
        this.production_companies = companies;
        this.runtime = runtime;
        this.status = status;
    }
}