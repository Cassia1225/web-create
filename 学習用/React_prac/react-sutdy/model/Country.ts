export type Country = {//REST Country APIからの形をここで定義する。
    name: {
        common:string;
    };
    capital:string[];//Tokyo とか配列で入る。
    region:string;//Asiaとか
    population:number;//人口が入る。
    flags: {
        png:string;//国旗画像のURL
    };
    languages: {
        [key:string]:string;
    }


}