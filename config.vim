let s:acronyms = { 
      \'IDE': 'Integrated Development Environment' ,
      \'HTML': 'HT Mark-up Language',
      \'HT': 'Hyper Text ',
      \'CSS': 'Cascading Style Sheets',
      \}

function! config#expand()
  let l:acro = expand('<cword>')
  let l:expanded = get(s:acronyms, l:acro)
  if !empty(l:expanded)
    execute "normal! ciw".l:expanded."\<ESC>"
  endif
	echo 'yes'
endfunction

noremap <c-c> <esc>:call config#expand()<CR>
inoremap <c-b> <esc>:call emmet#expandAbbr(3, '')<CR>

set complete+=k./completion.vim
set iskeyword+=-
autocmd FileType html set omnifunc=csscomplete#CompleteCSS
