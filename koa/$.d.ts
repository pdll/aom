// type $struct<T extends $> = ;

export declare function $(target: typeof Function, prefix?: string): Function;

/*
interface $$<T extends $> {
  ident: string;
  parent: T;
  tree: T[];
  struct: { [key: string]: T };
  root: T;
}

export declare class $ {
  $$: $$;

  $ident(ident?: string): string;
}
*/