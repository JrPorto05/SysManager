using FluentValidation;
using SysManager.Application.Contracts.ProductType.Request;
using SysManager.Application.Errors;
using SysManager.Application.Helpers;
using System;
using System.Collections.Generic;
using System.Text;

namespace SysManager.Application.Validators.ProductType
{
    public class ProductTypeGetFilterRequestValidator : AbstractValidator<ProductTypeGetFilterRequest>
    {
        public ProductTypeGetFilterRequestValidator()
        {
            RuleFor(contract => contract.Active)
                .Must(active => active == "todos" || active == "ativos" || active == "inativos")
                .WithMessage(SysManagerErrors.ProductType_Get_BadRequest_Active_Cannot_Be_Empty.Description());

            RuleFor(contract => contract.page)
                .Must(active => active > 0)
                .WithMessage(SysManagerErrors.ProductType_Get_BadRequest_Page_More_Than_Zero.Description());

            RuleFor(contract => contract.pageSize)
                .Must(active => active > 0)
                .WithMessage(SysManagerErrors.ProductType_Get_BadRequest_pageSize_More_Than_Zero.Description());

        }
    }
}
