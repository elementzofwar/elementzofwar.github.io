var $matches = document.getElementById('matches');

Starfire('client.clashRoyale.match.getAllByTag', {tag: 'PCV8'}, function (err, matches) {
  matches.forEach(function(match) {
    console.log(match);
    $match = document.createElement('div');
    $match.className = 'match';

    $type = document.createElement('div');
    $type.innerText = match.type;

    $vs = document.createElement('div');
    $vs.innerText = match.team[0].name + ' (' + match.team[0].crowns + ')';
    $vs.innerText += ' vs ';
    $vs.innerText += match.opponent[0].name + ' (' + match.opponent[0].crowns + ')';

    $match.appendChild($type);
    $match.appendChild($vs);
    $matches.appendChild($match);
  });
});