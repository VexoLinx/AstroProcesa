from abc import ABC, abstractmethod
from Backend.app.domain.models.RefineryMethodModel import RefineryMethodModel

class RefineryMethodRepository(ABC):

    @abstractmethod
    def create(self, method: RefineryMethodModel) -> RefineryMethodModel:
        pass

    @abstractmethod
    def get(self, method_id: int) -> RefineryMethodModel | None:
        pass

    @abstractmethod
    def list(self) -> list[RefineryMethodModel]:
        pass

    @abstractmethod
    def update(self, method: RefineryMethodModel) -> RefineryMethodModel:
        pass

    @abstractmethod
    def delete(self, method_id: int) -> None:
        pass