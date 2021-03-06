export function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export function flattenAndAddRoutes(li) {
  if (!li.Arr) {
    li.RouteName =
      li.Name +
      "(" +
      (li.Inputs ? li.Inputs.map(e => e.Name + "_" + e.Type).join("-") : "()") +
      ")";
    return li;
  }
  let arr = li.Arr.map(l => {
    if (l.Arr) {
      return l.Arr.map(flattenHierarchy);
    } else {
      return l;
    }
  });
  return arr;
}

export function flattenHierarchy(li) {
  if (!li.Arr) {
    return li;
  }
  let arr = li.Arr.map(l => {
    if (l.Arr) {
      return l.Arr.map(flattenHierarchy);
    } else {
      return l;
    }
  });
  return arr;
}
export function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

export default function idTest(a, b) {
  if (a && b) {
    if (
      a.Name === b.Name &&
      a.iteration === b.iteration &&
      a.iterationId === b.iterationId
    ) {
      return true;
    }
  }
}
