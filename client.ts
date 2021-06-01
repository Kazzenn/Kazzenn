  constructor(options?: ClientOptions) {
    super(options);

    this._silent = options?.silent !== undefined || false;
    this._silent = !!options?.silent;
    this._loadClasses = options?.classes || [];

    Client._variablesChar = options?.variablesChar || ":";
