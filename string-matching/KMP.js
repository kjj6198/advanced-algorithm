function kmpMatcher(text, pattern) {
  const textLen = text.length;
  const patternLen = pattern.length;

  const pi = computePrefixFn(pattern);
  let q = 0;

  for (let i = 0; i <= textLen - 1; i++) {
    while(q > 0 && (pattern[q] !== text[i])) {
      q = pi[q];
    }

    if (pattern[q] === text[i]) {
      q = q + 1;
    }

    if (q === patternLen) {
      console.log('match at ' + (i - patternLen + 1))

      q = pi[q - 1];

      if (typeof q === 'undefined') return ;
    }
  }
}

/**
 * KMP prefix function implementation
 * will take
 *
 * @param  {String} p [pattern]
 * @return {Array}   [pi]
 */
function computePrefixFn(p) {
  const m  = p.length;
  let pi = [0, 0];
  let k = 0;

  for (let q = 2; q < m; q++) {
    while (k > 0 && p[k + 1] !== p[q]) {
      k = pi[k];
    }

    if (p[k + 1] === p[q]) {
      k = k + 1;
    }

    pi[q] = k;
  }

  return pi;
}
