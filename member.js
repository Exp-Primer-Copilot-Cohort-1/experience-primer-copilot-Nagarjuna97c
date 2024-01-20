function skillsMember() {
  var member = document.getElementById('member').value;
  var member = member.split(',');
  var member = member.map(function(item) {
    return item.trim();
  });
  return member;
}