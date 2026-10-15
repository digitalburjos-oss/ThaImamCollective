"""Derive unique hero backgrounds from the photo library.
Each source photo yields four differently framed crops, so no two pages share a file.
Run: python3 scripts/make-heroes.py (outputs public/images/heroes/<source>-<n>.webp and -768 variants)."""
from PIL import Image, ImageFilter
import glob, os
SRC=sorted(f for f in glob.glob('public/images/*.webp') if '-768' not in f)
OUT='public/images/heroes'
S=0.62
BOXES=[(0,0),(1-S,0),(0,1-S),(1-S,1-S)]
for f in SRC:
    name=os.path.basename(f)[:-5].replace('blog-','')
    im=Image.open(f).convert('RGB'); W,H=im.size
    for n,(ax,ay) in enumerate(BOXES,1):
        w,h=int(W*S),int(H*S)
        x,y=int(ax*W),int(ay*H)
        c=im.crop((x,y,x+w,y+h)).resize((1536,1024),Image.LANCZOS).filter(ImageFilter.UnsharpMask(1.2,70,2))
        c.save(f'{OUT}/{name}-{n}.webp',quality=78,method=6)
        c.resize((768,512),Image.LANCZOS).save(f'{OUT}/{name}-{n}-768.webp',quality=76,method=6)
# Extra framings for the non-editorial photographs; field-note pages use these so their hero
# never shares a source photograph with the article cover shown on the same page.
EXTRA=[(0.5,0.25,0.25),(0.55,0.225,0.0),(0.55,0.225,0.45)]
for f in SRC:
    base=os.path.basename(f)[:-5]
    if base.startswith('blog-'): continue
    im=Image.open(f).convert('RGB'); W,H=im.size
    for n,(sc,ax,ay) in enumerate(EXTRA,5):
        w,h=int(W*sc),int(H*sc); x,y=int(ax*W),int(ay*H)
        c=im.crop((x,y,x+w,y+h)).resize((1536,1024),Image.LANCZOS).filter(ImageFilter.UnsharpMask(1.2,70,2))
        c.save(f'{OUT}/{base}-{n}.webp',quality=78,method=6)
        c.resize((768,512),Image.LANCZOS).save(f'{OUT}/{base}-{n}-768.webp',quality=76,method=6)
print('done')
