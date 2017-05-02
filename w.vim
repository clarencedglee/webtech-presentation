let s:acronyms = { 
      \'IDE': 'Integrated Development Environment' ,
      \'HTML': 'HT Mark-up Language',
      \'HT': 'Hyper Text ',
      \'CSS': 'Cascading Style Sheets',
      \}

function! w#expand()
  let l:acro = expand('<cword>')
  let l:expanded = get(s:acronyms, l:acro)
  if !empty(l:expanded)
    execute "normal! e?".l:acro."\<CR>i".l:expanded."\<ESC>ldw"
  endif
endfunction

noremap <c-c> <esc>:call w#expand()<CR>
inoremap <c-b> <esc>:call emmet#expandAbbr(3, '')<CR>
