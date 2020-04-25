function get_play_rate () {
  // define variables for html elements
  song_bpm_input = document.getElementById('song_bpm_id').value
  sample_bpm_input = document.getElementById('sample_bpm_id').value
  results_element = document.getElementById('results')

  // this clears the text every time button is pressed
  results_element.innerHTML = ''

  results = `Change your sample's playrate to ${song_bpm_input /
    sample_bpm_input}`

  // print results to webpage
  results_element.innerHTML += results
}
