export enum FilterOperationEnum {
  eq = '$eq',             // Equal
  ne = '$ne',             // Not equal
  gt = '$gt',             // Greater than
  lt = '$lt',             // Lower than
  gte = '$gte',           // Greater than or equal
  lte = '$lte',           // Lower than or equal
  starts = '$starts',     // Start with
  ends = '$ends',         // End with
  cont = '$cont',         // Contains
  excl = '$excl',         // Not contains
  in = '$in',             // In
  notin = '$notin',       // Not in
  isnull = '$isnull',     // Is null
  notnull = '$notnull',   // Is not null
  between = '$between',   // Between
  eqL = '$eqL',           // Equal (non case sensitive)
  neqL = '$neqL',         // Not equal (non case sensitive)
  startsL = '$startsL',   // Start (non case sensitive)
  endsL = '$endsL',       // End with (non case sensitive)
  contL = '$contL',       // Contain (non case sensitive)
  exclL = '$exclL',       // Not contain (non case sensitive)
  inL = '$inL',           // In (non case sensitive)
  notinL = '$notinL'      // Not in (non case sensitive)
}