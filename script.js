function get_play_rate () {
  // define variables for html elements
  song_bpm_input = document.getElementById('song_bpm_id')
  sample_bpm_input = document.getElementById('sample_bpm_id')
  results_element = document.getElementById('results')

  // print results to webpage
  results_element.innerHTML += song_bpm_input.value;
}
