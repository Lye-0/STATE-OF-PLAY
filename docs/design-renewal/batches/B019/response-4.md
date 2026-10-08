# B019 講評4への対応

R262/R263/R275の再設計は成立。R265 wide RTLで親の布が左へ移る一方、本文paddingは物理rightのままで布が本文を覆っていた。padding-block28/padding-inline18 72へ統一し、LTR/RTLで布側に同じ予約領域を確保する。狭幅の既存logical指定は維持。
