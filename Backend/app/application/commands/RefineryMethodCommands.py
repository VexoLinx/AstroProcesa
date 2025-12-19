from app.domain.models.RefineryMethodModel import RefineryMethodModel
from app.domain.repositories.RefineryMethodRepository import RefineryMethodRepository

class CreateRefineryMethod:
    def __init__(self, repo: RefineryMethodRepository):
        self.repo = repo

    def execute(self, name: str, time: float, price: float) -> RefineryMethodModel:
        method = RefineryMethodModel(
            id=None,
            name=name,
            time=time,
            price=price
        )
        
        return self.repo.create(method)
        