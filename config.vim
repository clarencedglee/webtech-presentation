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

set nowrap
set complete+=k./completion.vim
set iskeyword+=-
autocmd FileType html set omnifunc=csscomplete#CompleteCSS
abbr anc <a id="end">SIGNED IN BLOOD:_________________</a>
let @l="I<li>\<esc>A</li>\<esc>"
let @p="I<p>\<esc>A</p>\<esc>"
let @h="^\"adiwxi<\<esc>\"apa>\<esc>A</\<esc>\"apa>\<esc>"
hi LineNr ctermfg=241
hi Visual ctermfg=yellow ctermbg=black

abbr fresh 
      \<p>Now this is a story all about how</p>
      \<p>My life got flipped-turned upside down</p>
      \<p>And I'd like to take a minute</p>
      \<p>Just sit right there</p>
      \<p>I'll tell you how I became the prince of a town called Bel-Air</p>
