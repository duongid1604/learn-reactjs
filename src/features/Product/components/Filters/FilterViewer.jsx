import { Box, Chip } from "@mui/material";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { formatVND } from "utils";

const FILLTER_LIST = [
  {
    id: 1,
    getLabel: () => "Miễn phí giao hàng",
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovale: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };

      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }

      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: (filters) => "Có khuyến mại",
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion,
    isRemovale: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 3,
    getLabel: (filters) =>
      `Từ ${formatVND(filters.salePrice_gte)} đến ${formatVND(
        filters.salePrice_lte
      )}`,
    isActive: () => true,
    isVisible: (filters) =>
      Object.keys(filters).includes("salePrice_lte") &&
      Object.keys(filters).includes("salePrice_gte"),
    isRemovale: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;
      return newFilters;
    },
    onToggle: () => {},
  },
  // {
  //   id: 4,
  //   getLabel: (filters) => {

  //   },
  //   isActive: () => true,
  //   isVisible: (filters) => true,
  //   isRemovale: true,
  //   onRemove: (filters) => {},
  //   onToggle: (filters) => {},
  // },
];

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

FilterViewer.defaultProps = {
  filters: {},
  onChange: null,
};

function FilterViewer({ filters, onChange }) {
  const visibleFilters = useMemo(() => {
    return FILLTER_LIST.filter((x) => x.isVisible(filters));
  });

  return (
    <Box component="ul" sx={{ display: "flex", listStyle: "none", p: 0 }}>
      {visibleFilters.map((x) => (
        <li key={x.id}>
          <Chip
            sx={{ ml: 1 }}
            size="small"
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? "primary" : "default"}
            clickable={!x.isRemovale}
            onClick={
              x.isRemovale
                ? null
                : () => {
                    if (!onChange) return;

                    const newFilters = x.onToggle(filters);
                    onChange(newFilters);
                  }
            }
            onDelete={
              x.isRemovale
                ? () => {
                    if (!onChange) return;

                    const newFilters = x.onRemove(filters);
                    onChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
