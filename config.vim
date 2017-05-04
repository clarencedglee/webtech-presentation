let s:acronyms = { 
      \'IDE': 'Integrated Development Environment' ,
      \'HTML': 'HT Mark-up Language',
      \'HT': 'Hyper Text ',
      \'CSS': 'Cascading Style Sheets',
      \'http': 'Hyper Text Transfer Protocol',
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
abbr anc <a id="end">SIGNED IN BLOOD:_________________</a>
let @l="I<li>\<esc>A</li>\<esc>"
hi LineNr ctermfg=241
hi Visual ctermfg=yellow ctermbg=black
